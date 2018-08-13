using System;
using System.Globalization;
using System.Text;

namespace TestdataApi
{
	public class BusinessSearchFilter : SearchFilterBase, IQueryFilter
	{
		[GeneratedFilterChildClass(true)]
		public RegistertilhørighetClass Registertilhørighet { get; set; } = new RegistertilhørighetClass();
		[GeneratedFilterChildClass(true)]
		public ForeldreenhetClass Foreldreenhet { get; set; } = new ForeldreenhetClass();
		[GeneratedFilterChildClass(true)]
		public KommunikasjonspartClass Kommunikasjonspart { get; set; } = new KommunikasjonspartClass();
		[GeneratedFilterChildClass(false)]
		public AdresserogtjenesterClass Adresserogtjenester { get; set; } = new AdresserogtjenesterClass();
		[GeneratedFilterChildClass(true)]
		public VirksomhetstypeClass Virksomhetstype { get; set; } = new VirksomhetstypeClass();
		[GeneratedFilterChildClass(true)]
		public KommunikasjonsparttypeClass Kommunikasjonsparttype { get; set; } = new KommunikasjonsparttypeClass();
		[GeneratedFilterChildClass(true)]
		public ForeldreenhettypeClass Foreldreenhettype { get; set; } = new ForeldreenhettypeClass();
		[GeneratedFilterChildClass(true)]
		public TjenestekodeClass Tjenestekode { get; set; } = new TjenestekodeClass();
		[GeneratedFilterChildClass(true)]
		public NæringskodeClass Næringskode { get; set; } = new NæringskodeClass();
		[GeneratedFilterChildClass(true)]
		public TagsClass Tags { get; set; } = new TagsClass();
		
		public class RegistertilhørighetClass { 
		
			[GeneratedFilter("isInAr", false)]
			public bool? EriAR { get; set; } 
						
			[GeneratedFilter("not isInAr ", false)]
			public bool? ErikkeiAR { get; set; } 
						
			[GeneratedFilter("isInBedReg", false)]
			public bool? EriBREG { get; set; } 
						
			[GeneratedFilter("not isInBedReg", false)]
			public bool? ErikkeiBREG { get; set; } 
						
			[GeneratedFilter("isInFlr", false)]
			public bool? EriFLR { get; set; } 
						
			[GeneratedFilter("not isInFlr", false)]
			public bool? ErikkeiFLR { get; set; } 
						
			[GeneratedFilter("isInHtk", false)]
			public bool? EriHTK { get; set; } 
						
			[GeneratedFilter("not isInHtk", false)]
			public bool? ErikkeiHtk { get; set; } 
						
			[GeneratedFilter("isInResh", false)]
			public bool? EriResh { get; set; } 
						
			[GeneratedFilter("not isInResh", false)]
			public bool? ErikkeiResh { get; set; } 
						
			[GeneratedFilter("isInOfr", false)]
			public bool? EriOFR { get; set; } 
						
			[GeneratedFilter("not isInOfr", false)]
			public bool? ErikkeiOFR { get; set; } 
						
		 }

				
		public class ForeldreenhetClass { 
		
			[GeneratedFilter("(parentOrgNr ne null)", false)]
			public bool? Harforeldreenhet { get; set; } 
						
			[GeneratedFilter("(parentOrgNr eq null)", false)]
			public bool? Harikkeforeldreenhet { get; set; } 
						
		 }

				
		public class KommunikasjonspartClass { 
		
			[GeneratedFilter("isValidCommunicationParty", false)]
			public bool? Ergyldigkommunikasjonspart { get; set; } 
						
			[GeneratedFilter("not isValidCommunicationParty", false)]
			public bool? Erugyldigkommunikasjonspart { get; set; } 
						
		 }

				
		public class AdresserogtjenesterClass { 
			[GeneratedFilterChildClass(true)]
			public AdresserClass Adresser { get; set; } = new AdresserClass();
			[GeneratedFilterChildClass(true)]
			public KommuneClass Kommune { get; set; } = new KommuneClass();
			[GeneratedFilterChildClass(true)]
			public ElektoriniskeadresserClass Elektoriniskeadresser { get; set; } = new ElektoriniskeadresserClass();
		
		public class AdresserClass { 
		
			[GeneratedFilter("physicalAddressTypes/any(f: f eq 'BAD')", false)]
			public bool? Harubrukeligadresse { get; set; } 
						
			[GeneratedFilter("not physicalAddressTypes/any(f: f eq 'BAD')", false)]
			public bool? Harikkeubrukeligadresse { get; set; } 
						
			[GeneratedFilter("physicalAddressTypes/any(f: f eq 'Coordinates')", false)]
			public bool? Hargeografiskekoordinater { get; set; } 
						
			[GeneratedFilter("not physicalAddressTypes/any(f: f eq 'Coordinates')", false)]
			public bool? Harikkegeografiskekoordinater { get; set; } 
						
			[GeneratedFilter("physicalAddressTypes/any(f: f eq 'EL')", false)]
			public bool? Harelektroniskeadresser { get; set; } 
						
			[GeneratedFilter("not physicalAddressTypes/any(f: f eq 'EL')", false)]
			public bool? Harikkeelektroniskeadresser { get; set; } 
						
			[GeneratedFilter("physicalAddressTypes/any(f: f eq 'H')", false)]
			public bool? Harbostedsadresse { get; set; } 
						
			[GeneratedFilter("not physicalAddressTypes/any(f: f eq 'H')", false)]
			public bool? Harikkebostedsadresse { get; set; } 
						
			[GeneratedFilter("physicalAddressTypes/any(f: f eq 'HP')", false)]
			public bool? Harfolkeregisteradresse { get; set; } 
						
			[GeneratedFilter("not physicalAddressTypes/any(f: f eq 'HP')", false)]
			public bool? Harikkefolkeregisteradresse { get; set; } 
						
			[GeneratedFilter("physicalAddressTypes/any(f: f eq 'HV')", false)]
			public bool? Harferieadresse { get; set; } 
						
			[GeneratedFilter("not physicalAddressTypes/any(f: f eq 'HV')", false)]
			public bool? Harikkeferieadresse { get; set; } 
						
			[GeneratedFilter("physicalAddressTypes/any(f: f eq 'INV')", false)]
			public bool? Harfaktureringsadresse { get; set; } 
						
			[GeneratedFilter("not physicalAddressTypes/any(f: f eq 'INV')", false)]
			public bool? Harikkefaktureringsadresse { get; set; } 
						
			[GeneratedFilter("physicalAddressTypes/any(f: f eq 'PST')", false)]
			public bool? Harpostadresse { get; set; } 
						
			[GeneratedFilter("not physicalAddressTypes/any(f: f eq 'PST')", false)]
			public bool? Harikkepostadresse { get; set; } 
						
			[GeneratedFilter("physicalAddressTypes/any(f: f eq 'RES')", false)]
			public bool? Harbesøksadresse { get; set; } 
						
			[GeneratedFilter("not physicalAddressTypes/any(f: f eq 'RES')", false)]
			public bool? Harikkebesøksadresse { get; set; } 
						
			[GeneratedFilter("physicalAddressTypes/any(f: f eq 'RES_FLO')", false)]
			public bool? Harbesøksadresseforfastlegeordning { get; set; } 
						
			[GeneratedFilter("not physicalAddressTypes/any(f: f eq 'RES_FLO')", false)]
			public bool? Harikkebesøksadresseforfastlegeordning { get; set; } 
						
			[GeneratedFilter("physicalAddressTypes/any(f: f eq 'TMP')", false)]
			public bool? Harmidlertidigadresse { get; set; } 
						
			[GeneratedFilter("not physicalAddressTypes/any(f: f eq 'TMP')", false)]
			public bool? Harikkemidlertidigadresse { get; set; } 
						
			[GeneratedFilter("physicalAddressTypes/any(f: f eq 'WP')", false)]
			public bool? Hararbeidsadresse { get; set; } 
						
			[GeneratedFilter("not physicalAddressTypes/any(f: f eq 'WP')", false)]
			public bool? Harikkearbeidsadresse { get; set; } 
						
		 }

				
		public class KommuneClass { 
		
			[GeneratedFilter("municipalityNumber eq ", true)]
			public int? Kommunenr { get; set; } 
						
		 }

				
		public class ElektoriniskeadresserClass { 
		
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_AMT')", false)]
			public bool? Harediamtrix { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_AMT')", false)]
			public bool? Harikkeediamtrix { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_BIZ')", false)]
			public bool? Haredibiztalk { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_BIZ')", false)]
			public bool? Harikkeedibiztalk { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_BRV')", false)]
			public bool? Harbrevellerannenutskriftpåetfysiskmedium { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_BRV')", false)]
			public bool? Harikkebrevellerannenutskriftpåetfysiskmedium { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_CEN')", false)]
			public bool? Harsentralbordnummer { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_CEN')", false)]
			public bool? Harikkesentralbordnummer { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_DIR')", false)]
			public bool? Hardirektenummer { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_DIR')", false)]
			public bool? Harikkedirektenummer { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_DIV')", false)]
			public bool? Harannet { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_DIV')", false)]
			public bool? Harikkeannet { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_DS')", false)]
			public bool? Hardigitalsertifikat { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_DS')", false)]
			public bool? Harikkedigitalsertifikat { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_EDI')", false)]
			public bool? Haredistandardisertelektroniskmelding { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_EDI')", false)]
			public bool? Harikkeedistandardisertelektroniskmelding { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_EDI_WS')", false)]
			public bool? Harediwebservicestandardisertelektroniskmelding { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_EDI_WS')", false)]
			public bool? Harikkeediwebservicestandardisertelektroniskmelding { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_EPO')", false)]
			public bool? Harepostadresse { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_EPO')", false)]
			public bool? Harikkeepostadresse { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_FAX')", false)]
			public bool? Harfaxnummer { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_FAX')", false)]
			public bool? Harikkefaxnummer { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_ICE')", false)]
			public bool? Harsamhandlingsnummerice { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_ICE')", false)]
			public bool? Harikkesamhandlingsnummerice { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_KS')", false)]
			public bool? Harkrypteringssertifikat { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_KS')", false)]
			public bool? Harikkekrypteringssertifikat { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_LOK')", false)]
			public bool? Harlokalelektroniskadresse { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_LOK')", false)]
			public bool? Harikkelokalelektroniskadresse { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_MLD')", false)]
			public bool? Harmeldingsinformasjon { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_MLD')", false)]
			public bool? Harikkemeldingsinformasjon { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_MOB')", false)]
			public bool? Harmobiltelefonnummer { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_MOB')", false)]
			public bool? Harikkemobiltelefonnummer { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_NSM')", false)]
			public bool? Harnhnsmtp { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_NSM')", false)]
			public bool? Harikkenhnsmtp { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_PTL')", false)]
			public bool? Haradresselenkeforinnsynsrett { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_PTL')", false)]
			public bool? Harikkeadresselenkeforinnsynsrett { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_SB_ASYNC')", false)]
			public bool? Harasynkronamqpkø { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_SB_ASYNC')", false)]
			public bool? Harikkeasynkronamqpkø { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_SB_ERROR')", false)]
			public bool? Harfeilmeldingamqpkø { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_SB_ERROR')", false)]
			public bool? Harikkefeilmeldingamqpkø { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_SB_SYNC')", false)]
			public bool? Harsynkronamqpkø { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_SB_SYNC')", false)]
			public bool? Harikkesynkronamqpkø { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_SEN')", false)]
			public bool? Hartelefonnumersentralbord { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_SEN')", false)]
			public bool? Harikketelefonnumersentralbord { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_SS')", false)]
			public bool? Harsigneringssertifikat { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_SS')", false)]
			public bool? Harikkesigneringssertifikat { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_TLF')", false)]
			public bool? Hartelefonnummer { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_TLF')", false)]
			public bool? Harikketelefonnummer { get; set; } 
						
			[GeneratedFilter("electronicAddressTypes/any(f: f eq 'E_URL')", false)]
			public bool? Harhjemmeside { get; set; } 
						
			[GeneratedFilter("not electronicAddressTypes/any(f: f eq 'E_URL')", false)]
			public bool? Harikkehjemmeside { get; set; } 
						
		 }

				
		 }

				
		public class VirksomhetstypeClass { 
		
			[GeneratedFilter("(businessType ne null)", false)]
			public bool? Harvirksomhetstype { get; set; } 
						
			[GeneratedFilter("(businessType eq null)", false)]
			public bool? Harikkevirksomhetstype { get; set; } 
						
			[GeneratedFilter("(businessType eq '101')", false)]
			public bool? Erhelseforetakprivatesykehus { get; set; } 
						
			[GeneratedFilter("(businessType ne '101')", false)]
			public bool? Erikkehelseforetakprivatesykehus { get; set; } 
						
			[GeneratedFilter("(businessType eq '102')", false)]
			public bool? Erkommune { get; set; } 
						
			[GeneratedFilter("(businessType ne '102')", false)]
			public bool? Erikkekommune { get; set; } 
						
			[GeneratedFilter("(businessType eq '103')", false)]
			public bool? Erprivatpraktiserendeautoriserthelsepersonell { get; set; } 
						
			[GeneratedFilter("(businessType ne '103')", false)]
			public bool? Erikkeprivatpraktiserendeautoriserthelsepersonell { get; set; } 
						
			[GeneratedFilter("(businessType eq '104')", false)]
			public bool? Erprivatrøntgeninstitutt { get; set; } 
						
			[GeneratedFilter("(businessType ne '104')", false)]
			public bool? Erikkeprivatrøntgeninstitutt { get; set; } 
						
			[GeneratedFilter("(businessType eq '105')", false)]
			public bool? Erprivatlaboratorium { get; set; } 
						
			[GeneratedFilter("(businessType ne '105')", false)]
			public bool? Erikkeprivatlaboratorium { get; set; } 
						
			[GeneratedFilter("(businessType eq '106')", false)]
			public bool? Erprivatrehabiliteringsogopptreningssenter { get; set; } 
						
			[GeneratedFilter("(businessType ne '106')", false)]
			public bool? Erikkeprivatrehabiliteringsogopptreningssenter { get; set; } 
						
			[GeneratedFilter("(businessType eq '107')", false)]
			public bool? Erdistriktmedisinsksenter { get; set; } 
						
			[GeneratedFilter("(businessType ne '107')", false)]
			public bool? Erikkedistriktmedisinsksenter { get; set; } 
						
			[GeneratedFilter("(businessType eq '108')", false)]
			public bool? Erapotek { get; set; } 
						
			[GeneratedFilter("(businessType ne '108')", false)]
			public bool? Erikkeapotek { get; set; } 
						
			[GeneratedFilter("(businessType eq '109')", false)]
			public bool? Erbandagist { get; set; } 
						
			[GeneratedFilter("(businessType ne '109')", false)]
			public bool? Erikkebandagist { get; set; } 
						
			[GeneratedFilter("(businessType eq '110')", false)]
			public bool? Ertannlegetannlegesenter { get; set; } 
						
			[GeneratedFilter("(businessType ne '110')", false)]
			public bool? Erikketannlegetannlegesenter { get; set; } 
						
			[GeneratedFilter("(businessType eq '111')", false)]
			public bool? Erfylkeskommunaltannhelsetjeneste { get; set; } 
						
			[GeneratedFilter("(businessType ne '111')", false)]
			public bool? Erikkefylkeskommunaltannhelsetjeneste { get; set; } 
						
			[GeneratedFilter("(businessType eq '112')", false)]
			public bool? Ernasjonaltregister { get; set; } 
						
			[GeneratedFilter("(businessType ne '112')", false)]
			public bool? Erikkenasjonaltregister { get; set; } 
						
			[GeneratedFilter("(businessType eq '113')", false)]
			public bool? Eroffentligforvaltning { get; set; } 
						
			[GeneratedFilter("(businessType ne '113')", false)]
			public bool? Erikkeoffentligforvaltning { get; set; } 
						
			[GeneratedFilter("(businessType eq '114')", false)]
			public bool? Erinterkommunaltsamarbeid { get; set; } 
						
			[GeneratedFilter("(businessType ne '114')", false)]
			public bool? Erikkeinterkommunaltsamarbeid { get; set; } 
						
			[GeneratedFilter("(businessType eq '115')", false)]
			public bool? Erforsikringsselskap { get; set; } 
						
			[GeneratedFilter("(businessType ne '115')", false)]
			public bool? Erikkeforsikringsselskap { get; set; } 
						
			[GeneratedFilter("(businessType eq '116')", false)]
			public bool? Erandreprivateaktørersomyterhelsehjelp { get; set; } 
						
			[GeneratedFilter("(businessType ne '116')", false)]
			public bool? Erikkeandreprivateaktørersomyterhelsehjelp { get; set; } 
						
			[GeneratedFilter("(businessType eq '99')", false)]
			public bool? Erannet { get; set; } 
						
			[GeneratedFilter("(businessType ne '99')", false)]
			public bool? Erikkeannet { get; set; } 
						
			[GeneratedFilter("(businessType eq '999')", false)]
			public bool? Ertulleviksomhetstype2 { get; set; } 
						
			[GeneratedFilter("(businessType ne '999')", false)]
			public bool? Erikketulleviksomhetstype2 { get; set; } 
						
		 }

				
		public class KommunikasjonsparttypeClass { 
		
			[GeneratedFilter("(communicationPartyType eq 'Department')", false)]
			public bool? Avdeling { get; set; } 
						
			[GeneratedFilter("(communicationPartyType eq 'Organization')", false)]
			public bool? Organisasjon { get; set; } 
						
			[GeneratedFilter("(communicationPartyType eq 'Person')", false)]
			public bool? Person { get; set; } 
						
			[GeneratedFilter("(communicationPartyType eq 'Service')", false)]
			public bool? Tjeneste { get; set; } 
						
		 }

				
		public class ForeldreenhettypeClass { 
		
			[GeneratedFilter("(parentBusinessType eq '101')", false)]
			public bool? Erhelseforetakprivatesykehus { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '101')", false)]
			public bool? Erikkehelseforetakprivatesykehus { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '102')", false)]
			public bool? Erkommune { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '102')", false)]
			public bool? Erikkekommune { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '103')", false)]
			public bool? Erprivatpraktiserendeautoriserthelsepersonell { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '103')", false)]
			public bool? Erikkeprivatpraktiserendeautoriserthelsepersonell { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '104')", false)]
			public bool? Erprivatrøntgeninstitutt { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '104')", false)]
			public bool? Erikkeprivatrøntgeninstitutt { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '105')", false)]
			public bool? Erprivatlaboratorium { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '105')", false)]
			public bool? Erikkeprivatlaboratorium { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '106')", false)]
			public bool? Erprivatrehabiliteringsogopptreningssenter { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '106')", false)]
			public bool? Erikkeprivatrehabiliteringsogopptreningssenter { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '107')", false)]
			public bool? Erdistriktmedisinsksenter { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '107')", false)]
			public bool? Erikkedistriktmedisinsksenter { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '108')", false)]
			public bool? Erapotek { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '108')", false)]
			public bool? Erikkeapotek { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '109')", false)]
			public bool? Erbandagist { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '109')", false)]
			public bool? Erikkebandagist { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '110')", false)]
			public bool? Ertannlegetannlegesenter { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '110')", false)]
			public bool? Erikketannlegetannlegesenter { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '111')", false)]
			public bool? Erfylkeskommunaltannhelsetjeneste { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '111')", false)]
			public bool? Erikkefylkeskommunaltannhelsetjeneste { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '112')", false)]
			public bool? Ernasjonaltregister { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '112')", false)]
			public bool? Erikkenasjonaltregister { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '113')", false)]
			public bool? Eroffentligforvaltning { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '113')", false)]
			public bool? Erikkeoffentligforvaltning { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '114')", false)]
			public bool? Erinterkommunaltsamarbeid { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '114')", false)]
			public bool? Erikkeinterkommunaltsamarbeid { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '115')", false)]
			public bool? Erforsikringsselskap { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '115')", false)]
			public bool? Erikkeforsikringsselskap { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '116')", false)]
			public bool? Erandreprivateaktørersomyterhelsehjelp { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '116')", false)]
			public bool? Erikkeandreprivateaktørersomyterhelsehjelp { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '99')", false)]
			public bool? Erannet { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '99')", false)]
			public bool? Erikkeannet { get; set; } 
						
			[GeneratedFilter("(parentBusinessType eq '999')", false)]
			public bool? Ertulleviksomhetstype2 { get; set; } 
						
			[GeneratedFilter("(parentBusinessType ne '999')", false)]
			public bool? Erikketulleviksomhetstype2 { get; set; } 
						
		 }

				
		public class TjenestekodeClass { 
		
			[GeneratedFilter("serviceCode eq ", true)]
			public string Kode { get; set; } 
						
		 }

				
		public class NæringskodeClass { 
		
			[GeneratedFilter("industryCode/any(f: f eq '86.101')", false)]
			public bool? Eralminneligesomatiskesykehus { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.101')", false)]
			public bool? Erikkealminneligesomatiskesykehus { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.102')", false)]
			public bool? Ersomatiskespesialsykehus { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.102')", false)]
			public bool? Erikkesomatiskespesialsykehus { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.103')", false)]
			public bool? Erandresomatiskespesialinstitusjoner { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.103')", false)]
			public bool? Erikkeandresomatiskespesialinstitusjoner { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.104')", false)]
			public bool? Erinstitusjoneripsykiskhelsevernforvoksne { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.104')", false)]
			public bool? Erikkeinstitusjoneripsykiskhelsevernforvoksne { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.105')", false)]
			public bool? Erinstitusjoneripsykiskhelsevernforbarnogunge { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.105')", false)]
			public bool? Erikkeinstitusjoneripsykiskhelsevernforbarnogunge { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.106')", false)]
			public bool? Errusmiddelinstitusjoner { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.106')", false)]
			public bool? Erikkerusmiddelinstitusjoner { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.107')", false)]
			public bool? Errehabiliteringsogopptreningsinstitusjoner { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.107')", false)]
			public bool? Erikkerehabiliteringsogopptreningsinstitusjoner { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.211')", false)]
			public bool? Erallmennlegetjeneste { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.211')", false)]
			public bool? Erikkeallmennlegetjeneste { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.212')", false)]
			public bool? Ersomatiskepoliklinikker { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.212')", false)]
			public bool? Erikkesomatiskepoliklinikker { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.221')", false)]
			public bool? Erspesialisertlegetjenesteunntattpsykiatrisklegetjeneste { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.221')", false)]
			public bool? Erikkespesialisertlegetjenesteunntattpsykiatrisklegetjeneste { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.222')", false)]
			public bool? Erlegetjenesterinnenpsykiskhelsevern { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.222')", false)]
			public bool? Erikkelegetjenesterinnenpsykiskhelsevern { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.223')", false)]
			public bool? Erpoliklinikkeripsykiskhelsevernforvoksne { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.223')", false)]
			public bool? Erikkepoliklinikkeripsykiskhelsevernforvoksne { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.224')", false)]
			public bool? Erpoliklinikkeripsykiskhelsevernforbarnogunge { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.224')", false)]
			public bool? Erikkepoliklinikkeripsykiskhelsevernforbarnogunge { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.225')", false)]
			public bool? Errusmiddelpoliklinikker { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.225')", false)]
			public bool? Erikkerusmiddelpoliklinikker { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.230')", false)]
			public bool? Ertannhelsetjenester { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.230')", false)]
			public bool? Erikketannhelsetjenester { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.901')", false)]
			public bool? Erhjemmesykepleie { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.901')", false)]
			public bool? Erikkehjemmesykepleie { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.902')", false)]
			public bool? Erfysioterapitjeneste { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.902')", false)]
			public bool? Erikkefysioterapitjeneste { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.903')", false)]
			public bool? Erskoleoghelsestasjonstjeneste { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.903')", false)]
			public bool? Erikkeskoleoghelsestasjonstjeneste { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.904')", false)]
			public bool? Erannenforebyggendehelsetjeneste { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.904')", false)]
			public bool? Erikkeannenforebyggendehelsetjeneste { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.905')", false)]
			public bool? Erkliniskpsykologtjeneste { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.905')", false)]
			public bool? Erikkekliniskpsykologtjeneste { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.906')", false)]
			public bool? Ermedisinskelaboratorietjenester { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.906')", false)]
			public bool? Erikkemedisinskelaboratorietjenester { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.907')", false)]
			public bool? Erambulansetjenester { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.907')", false)]
			public bool? Erikkeambulansetjenester { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '86.909')", false)]
			public bool? Erandrehelsetjenester { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '86.909')", false)]
			public bool? Erikkeandrehelsetjenester { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '87.101')", false)]
			public bool? Ersomatiskespesialsykehjem { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '87.101')", false)]
			public bool? Erikkesomatiskespesialsykehjem { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '87.102')", false)]
			public bool? Ersomatiskesykehjem { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '87.102')", false)]
			public bool? Erikkesomatiskesykehjem { get; set; } 
						
			[GeneratedFilter("industryCode/any(f: f eq '87.201')", false)]
			public bool? Erpsykiatriskesykehjem { get; set; } 
						
			[GeneratedFilter("not industryCode/any(f: f eq '87.201')", false)]
			public bool? Erikkepsykiatriskesykehjem { get; set; } 
						
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

