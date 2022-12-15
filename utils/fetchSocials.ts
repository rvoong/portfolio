import {Social} from "../typings"

export const fetchSocials = async() =>{
    //call to backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    const data = await res.json()
    const socials: Social[] = data.socials;

    // console.log("fetching", socials);

    return socials;
};