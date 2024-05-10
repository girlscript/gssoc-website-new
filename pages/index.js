import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-mono grid h-screen place-items-center">
      <div class="border-4 rounded-xl p-8 w-[60vw]">
        <h1 className="text-3xl font-semibold text-center">Important Announcement: Website Closure</h1>
        <p className="p-4 m-4">Dear GSSoC Community, <br/>
        &emsp;&emsp;It is with a heavy heart that we must inform you that GSSoC will be permanently shutting down. This decision was not made lightly, we are unable to continue operating the site. 
                <br/>
                &emsp;&emsp;We want to express our deepest gratitude to each and every one of you who have been a part of our community. Your support, engagement, and contributions have made GSSoC a special place on the internet. 
                <br/>
                &emsp;&emsp;As of 10th May 2024, the website will be taken offline, and all user data will be securely deleted in accordance with our privacy policy. If you have any questions or concerns regarding your data, please reach out to us at <a href="mailto:gssoc@girlscript.tech" className="text-blue-700">gssoc@girlscript.tech</a>.
                <br/>
                &emsp;&emsp;Although GSSoC will no longer be accessible, we hope that the connections and memories formed here will stay with you. We encourage you to stay connected with fellow users and carry the spirit of GSSoC forward. 
                <br/>      
                &emsp;&emsp;Thank you for being a part of our journey. We wish you all the best in your future endeavors.
        </p>
      </div>
    </div>
  );
}
