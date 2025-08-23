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

export interface GeneralLogo extends Struct.ComponentSchema {
  collectionName: 'components_general_logos';
  info: {
    displayName: 'Logo';
    icon: 'heart';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface GeneralNavigation extends Struct.ComponentSchema {
  collectionName: 'components_general_navigations';
  info: {
    displayName: 'Navigation item';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    slug: Schema.Attribute.String & Schema.Attribute.Unique;
  };
}

export interface GeneralSocials extends Struct.ComponentSchema {
  collectionName: 'components_general_socials';
  info: {
    displayName: 'Social profile';
    icon: 'link';
  };
  attributes: {
    name: Schema.Attribute.String;
    username: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.heading': GeneralHeading;
      'general.logo': GeneralLogo;
      'general.navigation': GeneralNavigation;
      'general.socials': GeneralSocials;
    }
  }
}
