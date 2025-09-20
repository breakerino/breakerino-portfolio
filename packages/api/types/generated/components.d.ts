import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralHeading extends Struct.ComponentSchema {
  collectionName: 'components_general_headings';
  info: {
    displayName: 'Heading';
    icon: 'bulletList';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GeneralVideo extends Struct.ComponentSchema {
  collectionName: 'components_general_videos';
  info: {
    displayName: 'Video';
    icon: 'picture';
  };
  attributes: {
    thumbnail: Schema.Attribute.Media<'images'>;
    video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface PersonalSocials extends Struct.ComponentSchema {
  collectionName: 'components_personal_socials';
  info: {
    displayName: 'Social';
    icon: 'link';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      [
        'github',
        'linkedin',
        'facebook',
        'instagram',
        'spotify',
        'youtube',
        'myanimelist',
      ]
    >;
    username: Schema.Attribute.String;
  };
}

export interface PortfolioSkills extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_skills';
  info: {
    displayName: 'Skills';
    icon: 'brush';
  };
  attributes: {
    skills: Schema.Attribute.Relation<'oneToMany', 'api::portfolio.skill'>;
    title: Schema.Attribute.String;
  };
}

export interface ProjectLink extends Struct.ComponentSchema {
  collectionName: 'components_project_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['link', 'github', 'figma-logo']>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SiteLayout extends Struct.ComponentSchema {
  collectionName: 'components_site_layouts';
  info: {
    displayName: 'Layout';
    icon: 'layout';
  };
  attributes: {
    sectionHeading: Schema.Attribute.Component<'general.heading', false>;
    sectionID: Schema.Attribute.Enumeration<
      [
        'header',
        'hero',
        'about-me',
        'skills',
        'projects',
        'experience',
        'contact',
        'footer',
      ]
    > &
      Schema.Attribute.Unique;
  };
}

export interface SiteMeta extends Struct.ComponentSchema {
  collectionName: 'components_site_meta';
  info: {
    displayName: 'Meta';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'files' | 'images'>;
    keywords: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SiteNavigation extends Struct.ComponentSchema {
  collectionName: 'components_site_navigation';
  info: {
    displayName: 'Navigation';
    icon: 'house';
  };
  attributes: {
    label: Schema.Attribute.String;
    slug: Schema.Attribute.String & Schema.Attribute.Unique;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.heading': GeneralHeading;
      'general.video': GeneralVideo;
      'personal.socials': PersonalSocials;
      'portfolio.skills': PortfolioSkills;
      'project.link': ProjectLink;
      'site.layout': SiteLayout;
      'site.meta': SiteMeta;
      'site.navigation': SiteNavigation;
    }
  }
}
