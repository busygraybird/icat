export interface Image extends File {
  type: 'image/png' | 'image/jpg' | 'image/jpeg' | 'image/*';
}

export type PhotoValues = {
  photos: Array<Image>;
};
