using System;
using System.Globalization;
using System.Text;

namespace TestdataApi
{
	public class PersonSearchFilter : SearchFilterBase, IQueryFilter
	{
		[GeneratedFilterChildClass(true)]
		public KjønnClass Kjønn { get; set; } = new KjønnClass();
		[GeneratedFilterChildClass(true)]
		public AlderClass Alder { get; set; } = new AlderClass();
		[GeneratedFilterChildClass(true)]
		public RegistreringskodeClass Registreringskode { get; set; } = new RegistreringskodeClass();
		[GeneratedFilterChildClass(true)]
		public SivilstandClass Sivilstand { get; set; } = new SivilstandClass();
		[GeneratedFilterChildClass(true)]
		public EktefelleClass Ektefelle { get; set; } = new EktefelleClass();
		[GeneratedFilterChildClass(true)]
		public IdentifikatorClass Identifikator { get; set; } = new IdentifikatorClass();
		[GeneratedFilterChildClass(true)]
		public AdressetypeClass Adressetype { get; set; } = new AdressetypeClass();
		[GeneratedFilterChildClass(false)]
		public GodkjenningHPRClass GodkjenningHPR { get; set; } = new GodkjenningHPRClass();
		[GeneratedFilterChildClass(false)]
		public FastlegeinfoFLRClass FastlegeinfoFLR { get; set; } = new FastlegeinfoFLRClass();
		[GeneratedFilterChildClass(true)]
		public RegistertilhørighetClass Registertilhørighet { get; set; } = new RegistertilhørighetClass();
		[GeneratedFilterChildClass(true)]
		public BarnClass Barn { get; set; } = new BarnClass();
		[GeneratedFilterChildClass(true)]
		public ForeldreClass Foreldre { get; set; } = new ForeldreClass();
		[GeneratedFilterChildClass(false)]
		public DifiClass Difi { get; set; } = new DifiClass();
		[GeneratedFilterChildClass(true)]
		public TagsClass Tags { get; set; } = new TagsClass();
		
		public class KjønnClass { 
		
			[GeneratedFilter("(kjonn eq 2)", false)]
			public bool? Kvinne { get; set; } 
						
			[GeneratedFilter("(kjonn eq 3)", false)]
			public bool? Mann { get; set; } 
						
		 }

				
		public class AlderClass { 
		
			[GeneratedFilter("fodselsDato le ", true)]
			public DateTimeOffset? Minst { get; set; } 
						
			[GeneratedFilter("fodselsDato ge ", true)]
			public DateTimeOffset? Maks { get; set; } 
						
		 }

				
		public class RegistreringskodeClass { 
		
			[GeneratedFilter("(regStatus eq 3)", false)]
			public bool? Utvandret { get; set; } 
						
			[GeneratedFilter("(regStatus eq 5)", false)]
			public bool? Død { get; set; } 
						
			[GeneratedFilter("(regStatus eq 1)", false)]
			public bool? Bosatt { get; set; } 
						
			[GeneratedFilter("(regStatus eq 2)", false)]
			public bool? Utflyttet { get; set; } 
						
			[GeneratedFilter("(regStatus eq 4)", false)]
			public bool? Forsvunnet { get; set; } 
						
			[GeneratedFilter("(regStatus eq 6)", false)]
			public bool? Utgåttfødselsnummerkorrigerttilnytt { get; set; } 
						
			[GeneratedFilter("(regStatus eq 7)", false)]
			public bool? Fødselsregistrert { get; set; } 
						
			[GeneratedFilter("(regStatus eq 8)", false)]
			public bool? Annullerttilgang { get; set; } 
						
			[GeneratedFilter("(regStatus eq 9)", false)]
			public bool? Uregistrerttilgang { get; set; } 
						
		 }

				
		public class SivilstandClass { 
		
			[GeneratedFilter("(sivilstand eq 1)", false)]
			public bool? Ugift { get; set; } 
						
			[GeneratedFilter("(sivilstand eq 2)", false)]
			public bool? Gift { get; set; } 
						
			[GeneratedFilter("(sivilstand eq 3)", false)]
			public bool? Enkeenkemann { get; set; } 
						
			[GeneratedFilter("(sivilstand eq 4)", false)]
			public bool? Skilt { get; set; } 
						
			[GeneratedFilter("(sivilstand eq 5)", false)]
			public bool? Separert { get; set; } 
						
			[GeneratedFilter("(sivilstand eq 6)", false)]
			public bool? Registrertpartner { get; set; } 
						
			[GeneratedFilter("(sivilstand eq 7)", false)]
			public bool? Separertpartner { get; set; } 
						
			[GeneratedFilter("(sivilstand eq 8)", false)]
			public bool? Skiltpartner { get; set; } 
						
			[GeneratedFilter("(sivilstand eq 9)", false)]
			public bool? Gjenlevendepartner { get; set; } 
						
		 }

				
		public class EktefelleClass { 
		
			[GeneratedFilter("(ektefelleNin ne null)", false)]
			public bool? Harektefelle { get; set; } 
						
			[GeneratedFilter("(ektefelleNin eq null and isInPreg eq true)", false)]
			public bool? Harikkeektefelle { get; set; } 
						
		 }

				
		public class IdentifikatorClass { 
		
			[GeneratedFilter("(nin ne null and hasDnummer eq false)", false)]
			public bool? Harfødselsnummer { get; set; } 
						
			[GeneratedFilter("hasDnummer", false)]
			public bool? HarDnummer { get; set; } 
						
			[GeneratedFilter("validNin", false)]
			public bool? HargyldigNINmod11 { get; set; } 
						
			[GeneratedFilter("not validNin", false)]
			public bool? HarikkegyldigNINmod11 { get; set; } 
						
			[GeneratedFilter("ninFiveZeros", false)]
			public bool? Personnummererstattetav0er { get; set; } 
						
		 }

				
		public class AdressetypeClass { 
		
			[GeneratedFilter("(adresseKode eq 6)", false)]
			public bool? Sperretadressestrengtfortrolig { get; set; } 
						
			[GeneratedFilter("(adresseKode eq 7)", false)]
			public bool? Sperretadressefortrolig { get; set; } 
						
			[GeneratedFilter("(adresseKode eq 0)", false)]
			public bool? Vanligbosatt { get; set; } 
						
			[GeneratedFilter("(adresseKode eq 1)", false)]
			public bool? Utenriks { get; set; } 
						
			[GeneratedFilter("(adresseKode eq 2)", false)]
			public bool? Militær { get; set; } 
						
			[GeneratedFilter("(adresseKode eq 3)", false)]
			public bool? Svalbard { get; set; } 
						
			[GeneratedFilter("(adresseKode eq 4)", false)]
			public bool? Klientadresse { get; set; } 
						
			[GeneratedFilter("(adresseKode eq 5)", false)]
			public bool? Utenfastbopel { get; set; } 
						
			[GeneratedFilter("(adresseKode eq 8)", false)]
			public bool? Pendler { get; set; } 
						
		 }

				
		public class GodkjenningHPRClass { 
			[GeneratedFilterChildClass(true)]
			public HelsepersonellkategoriClass Helsepersonellkategori { get; set; } = new HelsepersonellkategoriClass();
			[GeneratedFilterChildClass(true)]
			public RekvisisjonsrettClass Rekvisisjonsrett { get; set; } = new RekvisisjonsrettClass();
			[GeneratedFilterChildClass(true)]
			public AutorisasjonClass Autorisasjon { get; set; } = new AutorisasjonClass();
			[GeneratedFilterChildClass(true)]
			public UtgåtteellersuspenderteClass Utgåtteellersuspenderte { get; set; } = new UtgåtteellersuspenderteClass();
			[GeneratedFilterChildClass(true)]
			public AvsluttetstatusClass Avsluttetstatus { get; set; } = new AvsluttetstatusClass();
		
		public class HelsepersonellkategoriClass { 
		
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'LE')", false)]
			public bool? Lege { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'SP')", false)]
			public bool? Sykepleier { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'JO')", false)]
			public bool? Jordmor { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'AA')", false)]
			public bool? Ambulansearbeider { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'AT')", false)]
			public bool? Apotektekniker { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'AU')", false)]
			public bool? Audiograf { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'BI')", false)]
			public bool? Bioingeniør { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'ET')", false)]
			public bool? Ergoterapeut { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'FA1')", false)]
			public bool? Provisorfarmasøyt { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'FA2')", false)]
			public bool? Reseptarfarmasøyt { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'FB')", false)]
			public bool? Fiskehelsebiolog { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'FO')", false)]
			public bool? Fotterapeut { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'FT')", false)]
			public bool? Fysioterapeut { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'HE')", false)]
			public bool? Helsesekretær { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'HF')", false)]
			public bool? Helsefagarbeider { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'HP')", false)]
			public bool? Hjelpepleier { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'KE')", false)]
			public bool? Kliniskernæringsfysiolog { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'KI')", false)]
			public bool? Kiropraktor { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'MT')", false)]
			public bool? Manuellterapeut { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'OA')", false)]
			public bool? Omsorgsarbeider { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'OI')", false)]
			public bool? Ortopediingeniør { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'OP')", false)]
			public bool? Optiker { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'OR')", false)]
			public bool? Ortoptist { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'PE')", false)]
			public bool? Perfusjonist { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'PS')", false)]
			public bool? Psykolog { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'RA')", false)]
			public bool? Radiograf { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'TH')", false)]
			public bool? Tannhelsesekretær { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'TL')", false)]
			public bool? Tannlege { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'TP')", false)]
			public bool? Tannpleier { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'TT')", false)]
			public bool? Tanntekniker { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'VE')", false)]
			public bool? Veterinær { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'VP')", false)]
			public bool? Vernepleier { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'XX')", false)]
			public bool? Ukjentuspesifisert { get; set; } 
						
		 }

				
		public class RekvisisjonsrettClass { 
		
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '1')", false)]
			public bool? Fullrekvisisjonsrett { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '2')", false)]
			public bool? Ingenrekvisisjonsrett { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '11')", false)]
			public bool? Rekvisisjonsrettprevensjonlokalanestesiogadrenalin { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '12')", false)]
			public bool? Rekvisisjonsrettforvaksiner { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '13')", false)]
			public bool? Fullrekvisisjonsrettmedsentralstimulerende { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '14')", false)]
			public bool? Rekvireringavdiagnostiskemedikamenter { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '15')", false)]
			public bool? Rekvisisjonforsykehus { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '16')", false)]
			public bool? RekvisisjonsrettforHreseptlegemidler { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '17')", false)]
			public bool? Rekvisisjonsrettutensentralstimulerendelegemidler { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '3')", false)]
			public bool? RekvisisjonsrettutengruppeApreparater { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '4')", false)]
			public bool? RekvisisjonsrettutengruppeBpreparater { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '5')", false)]
			public bool? RekvisisjonsrettutengrupperABpreparater { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '6')", false)]
			public bool? Rekvisisjonsrettpåvilkår { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '7')", false)]
			public bool? _281generelleretttilrekvirering { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '8')", false)]
			public bool? _282mgodkjutdforinjlokanest { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq '9')", false)]
			public bool? Legemidlertilakvatiskedyrusjøpattedyr { get; set; } 
						
		 }

				
		public class AutorisasjonClass { 
		
			[GeneratedFilter("hprAutorisasjon/any(f: f eq '1')", false)]
			public bool? Autorisasjon { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq '17')", false)]
			public bool? Autorisasjonmedvilkår { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq '4')", false)]
			public bool? Lisens { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq '14')", false)]
			public bool? Midlertidigtjenesteyting { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq '18')", false)]
			public bool? LIS1lisens { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq '2')", false)]
			public bool? Turnuslisens { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq '3')", false)]
			public bool? Studentlisens { get; set; } 
						
		 }

				
		public class UtgåtteellersuspenderteClass { 
		
			[GeneratedFilter("(hprAutorisasjon/any(f: f eq 'U_1') or hprAutorisasjon/any(f: f eq 'U_14') or hprAutorisasjon/any(f: f eq 'U_17') or hprAutorisasjon/any(f: f eq 'U_18') or hprAutorisasjon/any(f: f eq 'U_2') or hprAutorisasjon/any(f: f eq 'U_3') or hprAutorisasjon/any(f: f eq 'U_4'))", false)]
			public bool? Utgåttautorisasjon { get; set; } 
						
			[GeneratedFilter("(hprAutorisasjon/any(f: f eq 'S_1') or hprAutorisasjon/any(f: f eq 'S_14') or hprAutorisasjon/any(f: f eq 'S_17') or hprAutorisasjon/any(f: f eq 'S_18') or hprAutorisasjon/any(f: f eq 'S_2') or hprAutorisasjon/any(f: f eq 'S_3') or hprAutorisasjon/any(f: f eq 'S_4'))", false)]
			public bool? Suspendertautorisasjon { get; set; } 
						
			[GeneratedFilter("(hprRekvisisjonsrett/any(f: f eq 'U_1') or hprRekvisisjonsrett/any(f: f eq 'U_11') or hprRekvisisjonsrett/any(f: f eq 'U_12') or hprRekvisisjonsrett/any(f: f eq 'U_13') or hprRekvisisjonsrett/any(f: f eq 'U_14') or hprRekvisisjonsrett/any(f: f eq 'U_15') or hprRekvisisjonsrett/any(f: f eq 'U_16') or hprRekvisisjonsrett/any(f: f eq 'U_17') or hprRekvisisjonsrett/any(f: f eq 'U_2') or hprRekvisisjonsrett/any(f: f eq 'U_3') or hprRekvisisjonsrett/any(f: f eq 'U_4') or hprRekvisisjonsrett/any(f: f eq 'U_5') or hprRekvisisjonsrett/any(f: f eq 'U_6') or hprRekvisisjonsrett/any(f: f eq 'U_7') or hprRekvisisjonsrett/any(f: f eq 'U_8') or hprRekvisisjonsrett/any(f: f eq 'U_9'))", false)]
			public bool? Utgåttrekvisisjonsrett { get; set; } 
						
			[GeneratedFilter("(hprRekvisisjonsrett/any(f: f eq 'S_1') or hprRekvisisjonsrett/any(f: f eq 'S_11') or hprRekvisisjonsrett/any(f: f eq 'S_12') or hprRekvisisjonsrett/any(f: f eq 'S_13') or hprRekvisisjonsrett/any(f: f eq 'S_14') or hprRekvisisjonsrett/any(f: f eq 'S_15') or hprRekvisisjonsrett/any(f: f eq 'S_16') or hprRekvisisjonsrett/any(f: f eq 'S_17') or hprRekvisisjonsrett/any(f: f eq 'S_2') or hprRekvisisjonsrett/any(f: f eq 'S_3') or hprRekvisisjonsrett/any(f: f eq 'S_4') or hprRekvisisjonsrett/any(f: f eq 'S_5') or hprRekvisisjonsrett/any(f: f eq 'S_6') or hprRekvisisjonsrett/any(f: f eq 'S_7') or hprRekvisisjonsrett/any(f: f eq 'S_8') or hprRekvisisjonsrett/any(f: f eq 'S_9'))", false)]
			public bool? Suspendertrekvisisjonsrett { get; set; } 
						
			[GeneratedFilter("(hprHelsepersonellKategori/any(f: f eq 'U_AA') or hprHelsepersonellKategori/any(f: f eq 'U_AT') or hprHelsepersonellKategori/any(f: f eq 'U_AU') or hprHelsepersonellKategori/any(f: f eq 'U_BI') or hprHelsepersonellKategori/any(f: f eq 'U_ET') or hprHelsepersonellKategori/any(f: f eq 'U_FA1') or hprHelsepersonellKategori/any(f: f eq 'U_FA2') or hprHelsepersonellKategori/any(f: f eq 'U_FB') or hprHelsepersonellKategori/any(f: f eq 'U_FO') or hprHelsepersonellKategori/any(f: f eq 'U_FT') or hprHelsepersonellKategori/any(f: f eq 'U_HE') or hprHelsepersonellKategori/any(f: f eq 'U_HF') or hprHelsepersonellKategori/any(f: f eq 'U_HP') or hprHelsepersonellKategori/any(f: f eq 'U_JO') or hprHelsepersonellKategori/any(f: f eq 'U_KE') or hprHelsepersonellKategori/any(f: f eq 'U_KI') or hprHelsepersonellKategori/any(f: f eq 'U_LE') or hprHelsepersonellKategori/any(f: f eq 'U_MT') or hprHelsepersonellKategori/any(f: f eq 'U_OA') or hprHelsepersonellKategori/any(f: f eq 'U_OI') or hprHelsepersonellKategori/any(f: f eq 'U_OP') or hprHelsepersonellKategori/any(f: f eq 'U_OR') or hprHelsepersonellKategori/any(f: f eq 'U_PE') or hprHelsepersonellKategori/any(f: f eq 'U_PS') or hprHelsepersonellKategori/any(f: f eq 'U_RA') or hprHelsepersonellKategori/any(f: f eq 'U_SP') or hprHelsepersonellKategori/any(f: f eq 'U_TH') or hprHelsepersonellKategori/any(f: f eq 'U_TL') or hprHelsepersonellKategori/any(f: f eq 'U_TP') or hprHelsepersonellKategori/any(f: f eq 'U_TT') or hprHelsepersonellKategori/any(f: f eq 'U_VE') or hprHelsepersonellKategori/any(f: f eq 'U_VP') or hprHelsepersonellKategori/any(f: f eq 'U_XX'))", false)]
			public bool? Utgåtthelsepersonellkategori { get; set; } 
						
			[GeneratedFilter("(hprHelsepersonellKategori/any(f: f eq 'S_AA') or hprHelsepersonellKategori/any(f: f eq 'S_AT') or hprHelsepersonellKategori/any(f: f eq 'S_AU') or hprHelsepersonellKategori/any(f: f eq 'S_BI') or hprHelsepersonellKategori/any(f: f eq 'S_ET') or hprHelsepersonellKategori/any(f: f eq 'S_FA1') or hprHelsepersonellKategori/any(f: f eq 'S_FA2') or hprHelsepersonellKategori/any(f: f eq 'S_FB') or hprHelsepersonellKategori/any(f: f eq 'S_FO') or hprHelsepersonellKategori/any(f: f eq 'S_FT') or hprHelsepersonellKategori/any(f: f eq 'S_HE') or hprHelsepersonellKategori/any(f: f eq 'S_HF') or hprHelsepersonellKategori/any(f: f eq 'S_HP') or hprHelsepersonellKategori/any(f: f eq 'S_JO') or hprHelsepersonellKategori/any(f: f eq 'S_KE') or hprHelsepersonellKategori/any(f: f eq 'S_KI') or hprHelsepersonellKategori/any(f: f eq 'S_LE') or hprHelsepersonellKategori/any(f: f eq 'S_MT') or hprHelsepersonellKategori/any(f: f eq 'S_OA') or hprHelsepersonellKategori/any(f: f eq 'S_OI') or hprHelsepersonellKategori/any(f: f eq 'S_OP') or hprHelsepersonellKategori/any(f: f eq 'S_OR') or hprHelsepersonellKategori/any(f: f eq 'S_PE') or hprHelsepersonellKategori/any(f: f eq 'S_PS') or hprHelsepersonellKategori/any(f: f eq 'S_RA') or hprHelsepersonellKategori/any(f: f eq 'S_SP') or hprHelsepersonellKategori/any(f: f eq 'S_TH') or hprHelsepersonellKategori/any(f: f eq 'S_TL') or hprHelsepersonellKategori/any(f: f eq 'S_TP') or hprHelsepersonellKategori/any(f: f eq 'S_TT') or hprHelsepersonellKategori/any(f: f eq 'S_VE') or hprHelsepersonellKategori/any(f: f eq 'S_VP') or hprHelsepersonellKategori/any(f: f eq 'S_XX'))", false)]
			public bool? Suspenderthelsepersonellkategori { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_1')", false)]
			public bool? FullrekvisisjonsrettUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_11')", false)]
			public bool? RekvisisjonsrettprevensjonlokalanestesiogadrenalinUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_12')", false)]
			public bool? RekvisisjonsrettforvaksinerUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_13')", false)]
			public bool? FullrekvisisjonsrettmedsentralstimulerendeUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_14')", false)]
			public bool? RekvireringavdiagnostiskemedikamenterUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_15')", false)]
			public bool? RekvisisjonforsykehusUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_16')", false)]
			public bool? RekvisisjonsrettforHreseptlegemidlerUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_17')", false)]
			public bool? RekvisisjonsrettutensentralstimulerendelegemidlerUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_2')", false)]
			public bool? IngenrekvisisjonsrettUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_3')", false)]
			public bool? RekvisisjonsrettutengruppeApreparaterUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_4')", false)]
			public bool? RekvisisjonsrettutengruppeBpreparaterUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_5')", false)]
			public bool? RekvisisjonsrettutengrupperABpreparaterUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_6')", false)]
			public bool? RekvisisjonsrettpåvilkårUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_7')", false)]
			public bool? _281generelleretttilrekvireringUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_8')", false)]
			public bool? _282mgodkjutdforinjlokanestUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'U_9')", false)]
			public bool? LegemidlertilakvatiskedyrusjøpattedyrUtgått { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_1')", false)]
			public bool? FullrekvisisjonsrettSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_11')", false)]
			public bool? RekvisisjonsrettprevensjonlokalanestesiogadrenalinSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_12')", false)]
			public bool? RekvisisjonsrettforvaksinerSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_13')", false)]
			public bool? FullrekvisisjonsrettmedsentralstimulerendeSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_14')", false)]
			public bool? RekvireringavdiagnostiskemedikamenterSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_15')", false)]
			public bool? RekvisisjonforsykehusSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_16')", false)]
			public bool? RekvisisjonsrettforHreseptlegemidlerSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_17')", false)]
			public bool? RekvisisjonsrettutensentralstimulerendelegemidlerSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_2')", false)]
			public bool? IngenrekvisisjonsrettSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_3')", false)]
			public bool? RekvisisjonsrettutengruppeApreparaterSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_4')", false)]
			public bool? RekvisisjonsrettutengruppeBpreparaterSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_5')", false)]
			public bool? RekvisisjonsrettutengrupperABpreparaterSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_6')", false)]
			public bool? RekvisisjonsrettpåvilkårSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_7')", false)]
			public bool? _281generelleretttilrekvireringSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_8')", false)]
			public bool? _282mgodkjutdforinjlokanestSuspendert { get; set; } 
						
			[GeneratedFilter("hprRekvisisjonsrett/any(f: f eq 'S_9')", false)]
			public bool? LegemidlertilakvatiskedyrusjøpattedyrSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_AA')", false)]
			public bool? AmbulansearbeiderUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_AT')", false)]
			public bool? ApotekteknikerUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_AU')", false)]
			public bool? AudiografUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_BI')", false)]
			public bool? BioingeniørUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_ET')", false)]
			public bool? ErgoterapeutUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_FA1')", false)]
			public bool? ProvisorfarmasøytUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_FA2')", false)]
			public bool? ReseptarfarmasøytUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_FB')", false)]
			public bool? FiskehelsebiologUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_FO')", false)]
			public bool? FotterapeutUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_FT')", false)]
			public bool? FysioterapeutUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_HE')", false)]
			public bool? HelsesekretærUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_HF')", false)]
			public bool? HelsefagarbeiderUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_HP')", false)]
			public bool? HjelpepleierUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_JO')", false)]
			public bool? JordmorUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_KE')", false)]
			public bool? KliniskernæringsfysiologUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_KI')", false)]
			public bool? KiropraktorUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_LE')", false)]
			public bool? LegeUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_MT')", false)]
			public bool? ManuellterapeutUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_OA')", false)]
			public bool? OmsorgsarbeiderUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_OI')", false)]
			public bool? OrtopediingeniørUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_OP')", false)]
			public bool? OptikerUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_OR')", false)]
			public bool? OrtoptistUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_PE')", false)]
			public bool? PerfusjonistUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_PS')", false)]
			public bool? PsykologUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_RA')", false)]
			public bool? RadiografUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_SP')", false)]
			public bool? SykepleierUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_TH')", false)]
			public bool? TannhelsesekretærUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_TL')", false)]
			public bool? TannlegeUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_TP')", false)]
			public bool? TannpleierUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_TT')", false)]
			public bool? TannteknikerUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_VE')", false)]
			public bool? VeterinærUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_VP')", false)]
			public bool? VernepleierUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'U_XX')", false)]
			public bool? UkjentuspesifisertUtgått { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_AA')", false)]
			public bool? AmbulansearbeiderSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_AT')", false)]
			public bool? ApotekteknikerSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_AU')", false)]
			public bool? AudiografSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_BI')", false)]
			public bool? BioingeniørSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_ET')", false)]
			public bool? ErgoterapeutSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_FA1')", false)]
			public bool? ProvisorfarmasøytSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_FA2')", false)]
			public bool? ReseptarfarmasøytSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_FB')", false)]
			public bool? FiskehelsebiologSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_FO')", false)]
			public bool? FotterapeutSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_FT')", false)]
			public bool? FysioterapeutSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_HE')", false)]
			public bool? HelsesekretærSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_HF')", false)]
			public bool? HelsefagarbeiderSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_HP')", false)]
			public bool? HjelpepleierSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_JO')", false)]
			public bool? JordmorSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_KE')", false)]
			public bool? KliniskernæringsfysiologSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_KI')", false)]
			public bool? KiropraktorSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_LE')", false)]
			public bool? LegeSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_MT')", false)]
			public bool? ManuellterapeutSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_OA')", false)]
			public bool? OmsorgsarbeiderSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_OI')", false)]
			public bool? OrtopediingeniørSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_OP')", false)]
			public bool? OptikerSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_OR')", false)]
			public bool? OrtoptistSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_PE')", false)]
			public bool? PerfusjonistSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_PS')", false)]
			public bool? PsykologSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_RA')", false)]
			public bool? RadiografSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_SP')", false)]
			public bool? SykepleierSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_TH')", false)]
			public bool? TannhelsesekretærSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_TL')", false)]
			public bool? TannlegeSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_TP')", false)]
			public bool? TannpleierSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_TT')", false)]
			public bool? TannteknikerSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_VE')", false)]
			public bool? VeterinærSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_VP')", false)]
			public bool? VernepleierSuspendert { get; set; } 
						
			[GeneratedFilter("hprHelsepersonellKategori/any(f: f eq 'S_XX')", false)]
			public bool? UkjentuspesifisertSuspendert { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'U_1')", false)]
			public bool? AutorisasjonUtgått { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'U_14')", false)]
			public bool? MidlertidigtjenesteytingUtgått { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'U_17')", false)]
			public bool? AutorisasjonmedvilkårUtgått { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'U_18')", false)]
			public bool? LIS1lisensUtgått { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'U_2')", false)]
			public bool? TurnuslisensUtgått { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'U_3')", false)]
			public bool? StudentlisensUtgått { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'U_4')", false)]
			public bool? LisensUtgått { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'S_1')", false)]
			public bool? AutorisasjonSuspendert { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'S_14')", false)]
			public bool? MidlertidigtjenesteytingSuspendert { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'S_17')", false)]
			public bool? AutorisasjonmedvilkårSuspendert { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'S_18')", false)]
			public bool? LIS1lisensSuspendert { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'S_2')", false)]
			public bool? TurnuslisensSuspendert { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'S_3')", false)]
			public bool? StudentlisensSuspendert { get; set; } 
						
			[GeneratedFilter("hprAutorisasjon/any(f: f eq 'S_4')", false)]
			public bool? LisensSuspendert { get; set; } 
						
		 }

				
		public class AvsluttetstatusClass { 
		
			[GeneratedFilter("hprAvsluttetStatus/any(t: t eq '1')", false)]
			public bool? Tilbakekalt { get; set; } 
						
			[GeneratedFilter("hprAvsluttetStatus/any(t: t eq '2')", false)]
			public bool? Vedtakugyldiggjort { get; set; } 
						
			[GeneratedFilter("hprAvsluttetStatus/any(t: t eq '3')", false)]
			public bool? Frivilligavkalt { get; set; } 
						
			[GeneratedFilter("hprAvsluttetStatus/any(t: t eq '99')", false)]
			public bool? Avsluttethistorisk { get; set; } 
						
		 }

				
		 }

				
		public class FastlegeinfoFLRClass { 
			[GeneratedFilterChildClass(true)]
			public FastlegearbeidClass Fastlegearbeid { get; set; } = new FastlegearbeidClass();
			[GeneratedFilterChildClass(true)]
			public PasientpåfastlegeavtaleClass Pasientpåfastlegeavtale { get; set; } = new PasientpåfastlegeavtaleClass();
		
		public class FastlegearbeidClass { 
		
			[GeneratedFilter("fastlegestillinger/any(f: f eq 'LPFL')", false)]
			public bool? Fastlege { get; set; } 
						
			[GeneratedFilter("fastlegestillinger/any(f: f eq 'LPVI')", false)]
			public bool? Vikar { get; set; } 
						
			[GeneratedFilter("fastlegestillinger/any(f: f eq 'LPDL')", false)]
			public bool? Delelistelege { get; set; } 
						
		 }

				
		public class PasientpåfastlegeavtaleClass { 
		
			[GeneratedFilter("harfastlegemedstillinger/any(f: f eq 'LPFL')", false)]
			public bool? Medfastlege { get; set; } 
						
			[GeneratedFilter("harfastlegemedstillinger/any(f: f eq 'LPVI')", false)]
			public bool? Medvikar { get; set; } 
						
			[GeneratedFilter("harfastlegemedstillinger/any(f: f eq 'LPDL')", false)]
			public bool? Meddelelistelege { get; set; } 
						
			[GeneratedFilter("harfastlegemedstillinger/any(f: f eq 'NOTHIN')", false)]
			public bool? Legeløsliste { get; set; } 
						
		 }

				
		 }

				
		public class RegistertilhørighetClass { 
		
			[GeneratedFilter("isInPreg", false)]
			public bool? EriPREG { get; set; } 
						
			[GeneratedFilter("not isInPreg", false)]
			public bool? ErikkeiPREG { get; set; } 
						
			[GeneratedFilter("isInHpr", false)]
			public bool? EriHPR { get; set; } 
						
			[GeneratedFilter("not isInHpr", false)]
			public bool? ErikkeiHPR { get; set; } 
						
			[GeneratedFilter("isInFlr", false)]
			public bool? EriFLR { get; set; } 
						
			[GeneratedFilter("not isInFlr", false)]
			public bool? ErikkeiFLR { get; set; } 
						
			[GeneratedFilter("(difiStatus eq 1 or difiStatus eq 0)", false)]
			public bool? EriDifi { get; set; } 
						
			[GeneratedFilter("(difiStatus eq null or difiStatus eq 2)", false)]
			public bool? ErikkeiDifi { get; set; } 
						
		 }

				
		public class BarnClass { 
			[GeneratedFilterChildClass(true)]
			public ForeldrerettforbarnClass Foreldrerettforbarn { get; set; } = new ForeldrerettforbarnClass();
			[GeneratedFilterChildClass(true)]
			public IkkeforeldrerettforbarnClass Ikkeforeldrerettforbarn { get; set; } = new IkkeforeldrerettforbarnClass();
		
			[GeneratedFilter("barn/any()", false)]
			public bool? Harbarn { get; set; } 
						
			[GeneratedFilter("barn/any(t: t eq 'AgeLevel1')", false)]
			public bool? _0til2 { get; set; } 
						
			[GeneratedFilter("barn/any(t: t eq 'AgeLevel2')", false)]
			public bool? _2til6 { get; set; } 
						
			[GeneratedFilter("barn/any(t: t eq 'AgeLevel3')", false)]
			public bool? _6til12 { get; set; } 
						
			[GeneratedFilter("barn/any(t: t eq 'AgeLevel4')", false)]
			public bool? _12til16 { get; set; } 
						
			[GeneratedFilter("barn/any(t: t eq 'AgeLevel5')", false)]
			public bool? _16til19 { get; set; } 
						
			[GeneratedFilter("barn/any(t: t eq 'AgeLevel6')", false)]
			public bool? _19til30 { get; set; } 
						
			[GeneratedFilter("barn/any(t: t eq 'AgeLevel7')", false)]
			public bool? _30til60 { get; set; } 
						
			[GeneratedFilter("barn/any(t: t eq 'AgeLevel8')", false)]
			public bool? Fraogmed60 { get; set; } 
						
			[GeneratedFilter("not barn/any()", false)]
			public bool? Harikkebarn { get; set; } 
						
		public class ForeldrerettforbarnClass { 
		
			[GeneratedFilter("barnForeldrerett/any()", false)]
			public bool? Iallealdere { get; set; } 
						
			[GeneratedFilter("barnForeldrerett/any(t: t eq 'AgeLevel1')", false)]
			public bool? _0til2 { get; set; } 
						
			[GeneratedFilter("barnForeldrerett/any(t: t eq 'AgeLevel2')", false)]
			public bool? _2til6 { get; set; } 
						
			[GeneratedFilter("barnForeldrerett/any(t: t eq 'AgeLevel3')", false)]
			public bool? _6til12 { get; set; } 
						
			[GeneratedFilter("barnForeldrerett/any(t: t eq 'AgeLevel4')", false)]
			public bool? _12til16 { get; set; } 
						
			[GeneratedFilter("barnForeldrerett/any(t: t eq 'AgeLevel5')", false)]
			public bool? _16til19 { get; set; } 
						
			[GeneratedFilter("barnForeldrerett/any(t: t eq 'AgeLevel6')", false)]
			public bool? _19til30 { get; set; } 
						
			[GeneratedFilter("barnForeldrerett/any(t: t eq 'AgeLevel7')", false)]
			public bool? _30til60 { get; set; } 
						
			[GeneratedFilter("barnForeldrerett/any(t: t eq 'AgeLevel8')", false)]
			public bool? Alderfraogmed60 { get; set; } 
						
		 }

				
		public class IkkeforeldrerettforbarnClass { 
		
			[GeneratedFilter("barnUtenForeldrerett/any()", false)]
			public bool? Iallealdere { get; set; } 
						
			[GeneratedFilter("barnUtenForeldrerett/any(t: t eq 'AgeLevel1')", false)]
			public bool? _0til2 { get; set; } 
						
			[GeneratedFilter("barnUtenForeldrerett/any(t: t eq 'AgeLevel2')", false)]
			public bool? _2til6 { get; set; } 
						
			[GeneratedFilter("barnUtenForeldrerett/any(t: t eq 'AgeLevel3')", false)]
			public bool? _6til12 { get; set; } 
						
			[GeneratedFilter("barnUtenForeldrerett/any(t: t eq 'AgeLevel4')", false)]
			public bool? _12til16 { get; set; } 
						
			[GeneratedFilter("barnUtenForeldrerett/any(t: t eq 'AgeLevel5')", false)]
			public bool? _16til19 { get; set; } 
						
			[GeneratedFilter("barnUtenForeldrerett/any(t: t eq 'AgeLevel6')", false)]
			public bool? _19til30 { get; set; } 
						
			[GeneratedFilter("barnUtenForeldrerett/any(t: t eq 'AgeLevel7')", false)]
			public bool? _30til60 { get; set; } 
						
			[GeneratedFilter("barnUtenForeldrerett/any(t: t eq 'AgeLevel8')", false)]
			public bool? Alderfraogmed60 { get; set; } 
						
		 }

				
		 }

				
		public class ForeldreClass { 
			[GeneratedFilterChildClass(true)]
			public ForeldreNINeksistereriPREGClass ForeldreNINeksistereriPREG { get; set; } = new ForeldreNINeksistereriPREGClass();
		
			[GeneratedFilter("(momHasValidNin ne null or dadHasValidNin ne null)", false)]
			public bool? Harforeldre { get; set; } 
						
			[GeneratedFilter("(momHasValidNin eq null and dadHasValidNin eq null)", false)]
			public bool? Harikkeforeldre { get; set; } 
						
		public class ForeldreNINeksistereriPREGClass { 
		
			[GeneratedFilter("(momHasValidNin eq true or dadHasValidNin eq true)", false)]
			public bool? EriPREG { get; set; } 
						
			[GeneratedFilter("(momHasValidNin eq false or dadHasValidNin eq false)", false)]
			public bool? ErikkeiPREG { get; set; } 
						
		 }

				
		 }

				
		public class DifiClass { 
			[GeneratedFilterChildClass(true)]
			public StatusClass Status { get; set; } = new StatusClass();
			[GeneratedFilterChildClass(true)]
			public ReservasjonClass Reservasjon { get; set; } = new ReservasjonClass();
			[GeneratedFilterChildClass(true)]
			public DigitalpostkasseClass Digitalpostkasse { get; set; } = new DigitalpostkasseClass();
			[GeneratedFilterChildClass(true)]
			public VarslingsstatusClass Varslingsstatus { get; set; } = new VarslingsstatusClass();
		
		public class StatusClass { 
		
			[GeneratedFilter("(difiStatus eq 0)", false)]
			public bool? Aktiv { get; set; } 
						
			[GeneratedFilter("(difiStatus eq 1)", false)]
			public bool? Slettet { get; set; } 
						
			[GeneratedFilter("(difiStatus eq 2 or difiStatus eq null)", false)]
			public bool? Ikkeregistert { get; set; } 
						
		 }

				
		public class ReservasjonClass { 
		
			[GeneratedFilter("difiReservasjon", false)]
			public bool? Erreservert { get; set; } 
						
			[GeneratedFilter("not difiReservasjon", false)]
			public bool? Erikkereservert { get; set; } 
						
		 }

				
		public class DigitalpostkasseClass { 
			[GeneratedFilterChildClass(true)]
			public DigitalpostkassetypeClass Digitalpostkassetype { get; set; } = new DigitalpostkassetypeClass();
		
			[GeneratedFilter("(difiElectrionicAdresseType ne null)", false)]
			public bool? Hardigitalpostkasse { get; set; } 
						
			[GeneratedFilter("(difiElectrionicAdresseType eq null)", false)]
			public bool? Harikkedigitalpostkasse { get; set; } 
						
		public class DigitalpostkassetypeClass { 
		
			[GeneratedFilter("(difiElectrionicAdresseType eq '996460320')", false)]
			public bool? Eboks { get; set; } 
						
			[GeneratedFilter("(difiElectrionicAdresseType eq '984661185')", false)]
			public bool? Digipost { get; set; } 
						
		 }

				
		 }

				
		public class VarslingsstatusClass { 
		
			[GeneratedFilter("(difiVarslingsStatus eq 1)", false)]
			public bool? Kanmottavarsel { get; set; } 
						
			[GeneratedFilter("(difiVarslingsStatus eq 0)", false)]
			public bool? Kanikkemottavarsel { get; set; } 
						
		 }

				
		 }

				
		public class TagsClass { 
		
			[GeneratedFilter("tags/any(f: f eq 'QmFua0lE')", false)]
			public bool? BankID { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'R3J1bm5kYXRh')", false)]
			public bool? Grunndata { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'RERGTC1sZWdl')", false)]
			public bool? DDFLlege { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'RERGTCAtQXV0b3Rlc3QgUEhB')", false)]
			public bool? DDFLAutotestPHA { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'RElUIC0gR2VyaWNhIEFU')", false)]
			public bool? DITGericaAT { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'RElUIC0gR2VyaWNhIERldg==')", false)]
			public bool? DITGericaDev { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'RElUIC0gR2VyaWNhIFRlc3Q=')", false)]
			public bool? DITGericaTest { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'RElUIC0gSU5U')", false)]
			public bool? DITINT { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'RElUIC0gVmlzbWE=')", false)]
			public bool? DITVisma { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'RElULUdlcmljYSBTcHJpbnRtaWxqw7g=')", false)]
			public bool? DITGericaSprintmiljø { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'RGlnaXRhbGVTa2plbWEtRkhJ')", false)]
			public bool? DigitaleSkjemaFHI { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'RWxpbiBTeW5uw7h2ZXM=')", false)]
			public bool? ElinSynnøves { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'S0p1dHZpa2xpbmc=')", false)]
			public bool? KJutvikling { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'S2plcm5lam91cm5hbA==')", false)]
			public bool? Kjernejournal { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'SE9WRQ==')", false)]
			public bool? HOVE { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'SG9kb3JUZXN0')", false)]
			public bool? HodorTest { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'SGVsc2VWZXN0')", false)]
			public bool? HelseVest { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'SW5mb2RvYw==')", false)]
			public bool? Infodoc { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'TW9y')", false)]
			public bool? Mor { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'TW9yX0Zhcl9zYW1tZUZOUg==')", false)]
			public bool? Mor_Far_sammeFNR { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'TWluSUQ=')", false)]
			public bool? MinID { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'TWluZSBSZXNlcHRlcg==')", false)]
			public bool? MineResepter { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'TmV0dGFwb3Rlaw==')", false)]
			public bool? Nettapotek { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'U2VwYXJlcg==')", false)]
			public bool? Separer { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'UGFzaWVudHJlaXNlcg==')", false)]
			public bool? Pasientreiser { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'UGVudGVzdF9MMTctNA==')", false)]
			public bool? Pentest_L174 { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'UGxlbmFyaW8=')", false)]
			public bool? Plenario { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'UGxlbnR5')", false)]
			public bool? Plenty { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'UkZ0ZWFt')", false)]
			public bool? RFteam { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'UkZTY3J1bQ==')", false)]
			public bool? RFScrum { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'VE9ELXRlc3RwZXJzb24=')", false)]
			public bool? TODtestperson { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'VFBT')", false)]
			public bool? TPS { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'VGVzdHRhZw==')", false)]
			public bool? Testtag { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'VGh1bGFfS0o=')", false)]
			public bool? Thula_KJ { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'VVgtdGVzdHBlcnNvbg==')", false)]
			public bool? UXtestperson { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'VWhlbGRpZyB0ZXN0ZGF0YQ==')", false)]
			public bool? Uheldigtestdata { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'VXRlbiBmYXN0bGVnZQ==')", false)]
			public bool? Utenfastlege { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'ZGlnaXBvc3Q=')", false)]
			public bool? digipost { get; set; } 
						
			[GeneratedFilter("tags/any(f: f eq 'ZUJva3M=')", false)]
			public bool? eBoks { get; set; } 
						
		 }

					} 
	

}

