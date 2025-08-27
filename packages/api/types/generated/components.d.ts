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

export interface GeneralImage extends Struct.ComponentSchema {
  collectionName: 'components_general_image';
  info: {
    displayName: 'Image';
    icon: 'heart';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface GeneralVideo extends Struct.ComponentSchema {
  collectionName: 'components_general_videos';
  info: {
    displayName: 'Video';
    icon: 'picture';
  };
  attributes: {
    thumbnail: Schema.Attribute.Component<'general.image', false>;
    title: Schema.Attribute.String;
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
    name: Schema.Attribute.String;
    skills: Schema.Attribute.Relation<'oneToMany', 'api::portfolio.skill'>;
  };
}

export interface SiteLayout extends Struct.ComponentSchema {
  collectionName: 'components_site_layouts';
  info: {
    displayName: 'Layout';
    icon: 'layout';
  };
  attributes: {
    sectionComponent: Schema.Attribute.Enumeration<
      ['Header', 'Hero', 'AboutMe', 'Skills', 'Experience', 'Footer']
    >;
    sectionHeading: Schema.Attribute.Component<'general.heading', false>;
    sectionID: Schema.Attribute.String & Schema.Attribute.Unique;
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
      'general.image': GeneralImage;
      'general.video': GeneralVideo;
      'personal.socials': PersonalSocials;
      'portfolio.skills': PortfolioSkills;
      'site.layout': SiteLayout;
      'site.meta': SiteMeta;
      'site.navigation': SiteNavigation;
    }
  }
}
