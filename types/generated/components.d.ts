import type { Schema, Struct } from '@strapi/strapi';

export interface BookLocationBookLocation extends Struct.ComponentSchema {
  collectionName: 'components_book_location_book_locations';
  info: {
    description: '';
    displayName: 'book_location';
  };
  attributes: {
    dropoffDateTime: Schema.Attribute.DateTime;
    dropoffLocation: Schema.Attribute.String;
    pickupDateTime: Schema.Attribute.DateTime;
    pickupLocation: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'book-location.book-location': BookLocationBookLocation;
    }
  }
}
