import type { Schema, Struct } from '@strapi/strapi';

export interface BookLocationBookLocation extends Struct.ComponentSchema {
  collectionName: 'components_book_location_book_locations';
  info: {
    displayName: 'book_location';
  };
  attributes: {
    dropoffDate: Schema.Attribute.Date;
    dropoffLocation: Schema.Attribute.String;
    dropoffTime: Schema.Attribute.Time;
    pickupDate: Schema.Attribute.Date;
    pickupLocation: Schema.Attribute.String;
    pickupTime: Schema.Attribute.DateTime;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'book-location.book-location': BookLocationBookLocation;
    }
  }
}
