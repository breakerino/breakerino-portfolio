// --------------------------------------------------------------------- 
import React from 'react';
import { useQuery } from '@tanstack/react-query';
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { HeaderProps } from '@/containers/Header';
import { FooterProps } from '@/containers/Footer';
import { ContentProps } from '@/containers/Content';
import { PersonalSettings, SiteSettings } from '@/app/types';
// --------------------------------------------------------------------- 

export interface AppContextProps {
	children?: React.ReactNode | React.ReactNode[];
}

export interface AppContextStore {
	settings: {
		personal: PersonalSettings;
		site: SiteSettings;
	};
	sections: {
		header: HeaderProps['data'];
		content: ContentProps['data'];
		footer: FooterProps['data'];
	};
}

const AppContext = React.createContext<AppContextStore | undefined>(undefined);

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
	const { data: siteSettings } = useQuery<SiteSettings>({
		queryKey: ['settings', 'site'],
		suspense: true,
		enabled: false
	});
	
	const { data: personalSettings } = useQuery<PersonalSettings>({
		queryKey: ['settings', 'personal'],
		suspense: true,
		enabled: false
	});
	
	const { data: headerData } = useQuery<AppContextStore['sections']['header']>({
		queryKey: ['sections', 'header'],
		suspense: true,
		enabled: false
	});
	
	const { data: contentData } = useQuery<AppContextStore['sections']['content']>({
		queryKey: ['sections'],
		suspense: true,
		enabled: false
	});
	
	const { data: footerData } = useQuery<AppContextStore['sections']['footer']>({
		queryKey: ['sections', 'footer'],
		suspense: true,
		enabled: false
	});

	return (
		<AppContext.Provider
			value={{
				settings: {
					site: siteSettings!,
					personal: personalSettings!
				},
				sections: {
					header: headerData!,
					content: contentData!,
					footer: footerData!,
				},
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = React.useContext(AppContext);

	if (!context) {
		throw new Error('useAppContext must be used within an AppContextProvider');
	}

	return context;
};