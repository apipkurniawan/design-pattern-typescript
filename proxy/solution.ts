namespace ProxySolution {
  interface ICovid {
    getData(): Promise<{
      confirmed: number;
      recovered: number;
      deaths: number;
    }>;
  }

  let tempData: any = null;

  class Covid implements ICovid {
    country: string;

    constructor(country: string) {
      this.country = country;
    }

    async getData() {
      const response: any = await fetch(
        "https://covid19.mathdro.id/api/countries/" + this.country
      );
      const data: any = await response.json();

      tempData = data;

      return {
        confirmed: data.confirmed.value,
        recovered: data.recovered.value,
        deaths: data.deaths.value,
      };
    }
  }

  class ProxyCovid implements ICovid {
    covid: Covid;

    constructor(covid: Covid) {
      this.covid = covid;
    }

    async getData() {
      if (tempData) {
        console.log("didapet dari database");

        return {
          confirmed: tempData.confirmed.value,
          recovered: tempData.recovered.value,
          deaths: tempData.deaths.value,
        };
      }

      console.log("didapat dari covid API");
      return this.covid.getData();
    }
  }

  const covid1 = new ProxyCovid(new Covid("id"));
  console.log(await covid1.getData());

  const covid2 = new ProxyCovid(new Covid("id"));
  console.log(await covid2.getData());
}
