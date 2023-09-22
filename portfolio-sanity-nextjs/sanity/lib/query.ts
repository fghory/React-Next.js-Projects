import { groq } from "next-sanity";
import client from "./client";

export async function getProfile() {
  return client.fetch(
    `*[_type == "profile" && _id == '614497ed-9d0d-4ad9-bd91-124ff7b596a6']{
        _id,
        fullName,
        headline,
        profileimage {alt, "image": asset->url},
        shortbio,
        location,
        fullbio,
        email,
        "resumeURL": resumeURL.asset->url,
        sociallinks,
        skills
      }`
  );
}
