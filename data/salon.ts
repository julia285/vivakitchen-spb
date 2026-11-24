/**
 * Photos of the salon itself (the exposition in МЦ «Ланской»), shot on a phone
 * by the owner's family and shown as-is. They deliberately carry no
 * "Бренд ViVaKitchen" credit: the exposition is the salon's own, and not every
 * piece on display has to be a ViVaKitchen product. No price tags. The one photo
 * with a person is the owner, used with her agreement and without a caption.
 */

export type SalonPhoto = { src: string; alt: string };

export const salonPhotos: Record<'front' | 'samples' | 'twoKitchens' | 'darkWood' | 'metal' | 'owner', SalonPhoto> = {
  front: {
    src: '/images/salon/expo-front.webp',
    alt: 'Выставочная кухня в салоне: рифлёные фасады с латунными вставками и стенд с образцами',
  },
  samples: {
    src: '/images/salon/expo-samples.webp',
    alt: 'Салон в МЦ «Ланской»: выставочная кухня и стенд с образцами фасадов',
  },
  twoKitchens: {
    src: '/images/salon/expo-two-kitchens.webp',
    alt: 'Салон в МЦ «Ланской»: светлая классическая кухня и кухня с деревянными фасадами',
  },
  darkWood: {
    src: '/images/salon/expo-dark-wood.webp',
    alt: 'Выставочная кухня в графитовом цвете с деревянными фасадами по диагонали',
  },
  owner: {
    src: '/images/salon/owner-in-salon.webp',
    alt: 'В салоне у выставочной кухни: открытые ящики с системами хранения и образцы фасадов',
  },
  metal: {
    src: '/images/salon/samples-metal.webp',
    alt: 'Образцы металлических фасадов разных оттенков на столешнице в салоне',
  },
};
