import axios, { AxiosInstance, AxiosResponse } from "axios";
import cheerio, { CheerioAPI } from "cheerio";

class Scraper {
    private readonly request: AxiosInstance;

    public constructor() {
        this.request = axios.create();
    }

    public async Scrape(url: string): Promise<void> {
        const res: AxiosResponse<string> = await this.request.get<string>(url);
        const html: string = res.data;

        const page: CheerioAPI = cheerio.load(
            html,
            // {
            //     xmlMode: true,
            //     decodeEntities: true,
            // }
        );
        console.log(page(".showcase-project-card").text());
        console.log(page(".showcase-project-card__info").text());
    }
}

(async() => {
    const s: Scraper = new Scraper();
    await s.Scrape("https://webflow.com/websites/popular");
})();

