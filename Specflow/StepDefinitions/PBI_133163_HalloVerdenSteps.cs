using System;
using TechTalk.SpecFlow;

namespace aTest.StepDefinitions
{
    [Binding]
    public class PBI_133163_HalloVerdenSteps
    {
        [Given(@"I have entered (.*) into the calculator")]
        public void GivenIHaveEnteredIntoTheCalculator(int p0)
        {
            Console.WriteLine(" heil ");
        }
        
        [Given(@"Gitt hvem som helst")]
        public void GivenGittHvemSomHelst()
        {
            Console.WriteLine(" heil ");
        }
        
        [Given(@"Gitt dato for når søknadene kommer inn")]
        public void GivenGittDatoForNarSoknadeneKommerInn()
        {
            Console.WriteLine(" heil ");
        }
        
        [Given(@"Gitt saksbehandler med begrenset syn")]
        public void GivenGittSaksbehandlerMedBegrensetSyn()
        {
            Console.WriteLine(" heil ");
        }
        
        [Given(@"Gitt at det ikke finnes søknader i databasen")]
        public void GivenGittAtDetIkkeFinnesSoknaderIDatabasen()
        {
            Console.WriteLine(" heil ");
        }
        
        [When(@"I press add")]
        public void WhenIPressAdd()
        {
            Console.WriteLine(" heil ");
        }
        
        [When(@"Når jeg går til URL hdir-elsa\.no")]
        public void WhenNarJegGarTilURLHdir_Elsa_No()
        {
            Console.WriteLine(" heil ");
        }
        
        [When(@"Når saksbehandler ser listen")]
        public void WhenNarSaksbehandlerSerListen()
        {
            Console.WriteLine(" heil ");
        }
        
        [When(@"Når jeg åpner Elsa")]
        public void WhenNarJegApnerElsa()
        {
            Console.WriteLine(" heil ");
        }
        
        [When(@"Når saksbehandler går inn i Elsa")]
        public void WhenNarSaksbehandlerGarInnIElsa()
        {
            Console.WriteLine(" heil ");
        }
        
        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int p0)
        {
            Console.WriteLine(" heil ");
        }
        
        [Then(@"Så ser jeg forsiden")]
        public void ThenSaSerJegForsiden()
        {
            Console.WriteLine(" heil ");
        }
        
        [Then(@"Så sorteres den med de eldste søknadene øverst \(descending på dato\)")]
        public void ThenSaSorteresDenMedDeEldsteSoknadeneOverstDescendingPaDato()
        {
            // ScenarioContext.Current.Pending();
            Console.WriteLine(" heil ");
        }
        
        [Then(@"Så kan jeg forstå alt som finnes på siden")]
        public void ThenSaKanJegForstaAltSomFinnesPaSiden()
        {
            Console.WriteLine(" heil ");
        }
        
        [Then(@"Så vises en tom liste")]
        public void ThenSaVisesEnTomListe()
        {
            Console.WriteLine(" heil ");
        }
    }
}
