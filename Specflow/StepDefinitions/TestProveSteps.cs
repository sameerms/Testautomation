using System;
using TechTalk.SpecFlow;
using aTest.Byggere;

namespace aTest.StepDefinitions
{
    [Binding]
    public class TestProveSteps : StartsideBygger
    {
        [Given(@"inni startside")]
        public void GivenInniStartside()
        {
            Jeg.NavigerTilStartsiden();
        }
        
        [When(@"når jeg skriver epostaddresse")]
        public void WhenNarJegSkriverEpostaddresse()
        {
            Når.SkriverEpostAdr();
        }
        
        [When(@"når jeg skriver passord")]
        public void WhenNarJegSkriverPassord()
        {
            Når.SkriverPassord();
        }

        [Then(@"jeg er logget inn")]
        public void ThenJegErLoggetInn()
        {
            Så.KlikkerPåLoginButton();
        }
    }
}
