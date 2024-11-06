import type { Schema, Struct } from '@strapi/strapi';

export interface BookingBook extends Struct.ComponentSchema {
  collectionName: 'components_booking_books';
  info: {
    displayName: 'book';
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
      'booking.book': BookingBook;
    }
  }
}
