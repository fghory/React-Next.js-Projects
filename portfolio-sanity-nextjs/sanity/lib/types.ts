import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileimage: {
    alt: string;
    image: string;
  };
  shortbio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  sociallinks: string[];
  skills: string[];
};
