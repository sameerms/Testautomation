using OpenQA.Selenium;

namespace AutotestdataSwagger.Konstanter
{
    public static class Konstantliste
    {
        public static By VilkårPrøveutknapp =>By.XPath("//*[@id='Vilk229r_ApiSakVilkaarPost_content']/form/div[3]/input");


        public static By VilkårPrøveutknappResponse => By.CssSelector("#Vilk229r_ApiSakVilkaarPost_content > div.response > div.block.response_body.hljs");
        public static By PostVilkår => By.CssSelector("#Vilk229r_ApiSakVilkaarPost > div.heading > h3 > span.http_method > a");

        public static By TekstareaVilkår => By.Name("vilkaar");

        public static By PostSakstype => By.CssSelector(
            "#Sakstype_ApiSakSakstypePost > div.heading > h3 > span.http_method > a");
        public static By TekstareaSakstype => By.Name("sakstype");

        public static By SakstypePrøveutknapp =>
            By.CssSelector("#Sakstype_ApiSakSakstypePost_content > form > div.sandbox_header > input");

        public static By SakstypePrøveutknappResponse =>
            By.CssSelector("#Sakstype_ApiSakSakstypePost_content > div.response > div.block.response_body.hljs");
    }
}
