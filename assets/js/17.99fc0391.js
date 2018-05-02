(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{50:function(e,n,i){e.exports=i.p+"assets/img/merkle_tree.e4e7de8b.png"},51:function(e,n,i){e.exports=i.p+"assets/img/blockchain_header_body.227b4012.png"},52:function(e,n,i){e.exports=i.p+"assets/img/blockchain_example_blocks.563e741b.png"},74:function(e,n,i){"use strict";i.r(n);var r=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"blockchain-technologie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-technologie","aria-hidden":"true"}},[e._v("#")]),e._v(" Blockchain Technologie")]),r("h2",{attrs:{id:"architektur-und-funktionsweise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#architektur-und-funktionsweise","aria-hidden":"true"}},[e._v("#")]),e._v(" Architektur und Funktionsweise")]),r("p",[e._v("Autor: Sebastian Janzen")]),r("h2",{attrs:{id:"arten-einer-blockchain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arten-einer-blockchain","aria-hidden":"true"}},[e._v("#")]),e._v(" Arten einer Blockchain")]),r("p",[e._v("Autor: Sebastian Janzen")]),r("p",[e._v("Public, Private, Konsortium, Permissionless, Permissioned etc.")]),r("h2",{attrs:{id:"eigenschaften-einer-blockchain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#eigenschaften-einer-blockchain","aria-hidden":"true"}},[e._v("#")]),e._v(" Eigenschaften einer Blockchain")]),r("p",[e._v("Autor: Björn Enders-Müller")]),r("h3",{attrs:{id:"immutable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#immutable","aria-hidden":"true"}},[e._v("#")]),e._v(" Immutable")]),r("h3",{attrs:{id:"transaktion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaktion","aria-hidden":"true"}},[e._v("#")]),e._v(" Transaktion")]),r("h3",{attrs:{id:"blocke"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#blocke","aria-hidden":"true"}},[e._v("#")]),e._v(" Blöcke")]),r("p",[e._v("Der Begriff Blockchain setzt sich aus den englischen Wörten „block“ und „chain“ zusammen. Dies übersetzt bedeutet so viel wie Blockkette, Kette aus Blöcken oder verkettete Blöcke. Dieser Abschnitt behandelt den Aufbau eines einzelnen Blockes der Blockchain.")]),r("p",[e._v("In jeder Blockchain gibt es einen besonderen Block. Den sogenannten „genesis block“ oder auch Ursprungsblock. Er ist der erste und älteste Block der Blockchain. Als Ursprungsblock kann nur er alleine keinen sogenannten „parent block“, frei übersetzt Elternblock, haben. Jeder andere Block der Blockchain verweist jeweils auf den vorherigen Block. Die Blockchain ähnelt somit der Datenstruktur einer einfach verketteten Liste.")]),r("p",[e._v("Die Aufgabe von Blöcken ist es Transaktionen innerhalb der Blockchain zu bündeln. Diese Blöcke werden dann mit unterschiedlichsten Verfahren auf alle Netzwerkknoten verteilt. Ein Block lässt sich in einen „block header“ und den „block body“ unterteilen. Der Block header enthält Metainformationen über den Block selbst, Elternblock und die Transaktionen.")]),r("p",[r("img",{attrs:{src:i(52),alt:"blockchain_example_blocks",title:"Beispielhafter Aufbau von drei Blöcken."}}),e._v("\nAbbildung entnommen aus "),r("a",[r("a",{attrs:{href:"#ref_Zheng17"}},[e._v("[ZHENG17]")])]),r("img",{attrs:{src:i(51),alt:"blockchain_header_body",title:"Aufbau eines einzelnen Blocks."}}),e._v("\nAbbildung entnommen aus "),r("a",[r("a",{attrs:{href:"#ref_Zheng17"}},[e._v("[ZHENG17]")])])]),r("p",[e._v("Wie in der Abbildung zu sehen ist besteht der Block aus unterschiedlichen Elementen. Der Header unterteilt sich in die folgenden sechs Teile:")]),r("ul",[r("li",[e._v("Block Version: Mit der Block version wird beschrieben mit welchen Regeln der Block validiert werden muss.")]),r("li",[e._v("Merkle Tree Root Hash: Enthält die Wurzel des „Merkel Tree“ oder auch sogenannten Hash-Baum. Der Baum enthält Hash-Werte zu jeder Transaktion des Blockes. Was genau eine Transaktion und ein Merkel Tree ist wird in anderen Abschnitten genauer erläutert.")]),r("li",[e._v("Timestamp: Ein Timestamp ist ein Integer-Wert der jeder Sekunde seit dem 1. Januar 1970 UTC inkrementiert wird.")]),r("li",[e._v("nBits: Der sogenannte nBits Wert ist ein Schwellwert um die Validität des Blocks zu überprüfen. Wenn der Hash-Wert des Blockes selbst größer ist als der nBits Wert ist der Block nicht zulässig.")]),r("li",[e._v("Nonce: Die Nonce ist 4-Byte großes Datenfeld, welches in der Regel bei 0 startet und bei jedem Hash-Versuch inkrementiert wird. Miner verändern den Wert der Nonce und Hashen den Block danach erneut um zu überprüfen ob er in einem bestimmten Wertebereich liegt. Wenn dies nicht der Fall ist wird die Nonce erneut verändert und der Wertebereich wird erneut geprüft. Falls der Wert passt kann der Block verteilt werden und von anderen Netzwerkknoten überprüft werden und an die Blockchain gehängt werden.")]),r("li",[e._v("Parent Block Hash: Speichert den Hash-Wert des Elternblockes um eine einfach verkettete Liste von Blöcken zu erzeugen. Diese Mechanik sorgt für die Sicherheit vor Manipulation der älteren Blöcke.")])]),r("p",[e._v("Im body des Blocks befindet sich ein Zähler für die Anzahl der Transaktionen des Blockes. Zusätzlich lassen sich die Transaktionen selbst dort finden. Der genaue Aufbau einer Transaktion wird in anderen Abschnitten erläutert.")]),r("p",[r("a",[r("a",{attrs:{href:"#ref_Zheng17"}},[e._v("[ZHENG17]")])])]),r("h3",{attrs:{id:"merkle-tree"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#merkle-tree","aria-hidden":"true"}},[e._v("#")]),e._v(" Merkle Tree")]),r("p",[e._v("Ein Merkle tree ist eine Datenstruktur die auf einem Binär-Baum basiert. Bei einem Merkle tree wird jedoch in jeder Ebene eine One-Way-Hash-Funktion verwendet um den Baum und die Blätter vor Manipulation oder Fehlern zu schützen. Häufig wird daher der Merkle tree auch Hash-Baum genannt. Die Funktionsweise innerhalb einer Blockchain ist wie folgt. Jeder Block der Blockchain hält einen Hash-Baum oder zumindest die Wurzel des Baums, dazu im Folgenden mehr. Für eine Blockchain werden als Blätter die abzusichernden Transaktionen verwendet. Die Knoten direkt über den Transaktionen werden mit der Hash-Funktion erzeugt. In der darüberliegenden Ebene werden jeweils zwei Knoten zusammengeführt in dem für die Hash-Werte der beiden Knoten erneut ein dritter Hash-Wert erzeugt wird. Dieser Prozess wird fortgesetzt bis in der höchsten Ebene nur noch ein Knoten befindet. Die sogenannte Wurzel bzw. Root-Hash des Hash-Baums. In der folgenden Abbildung ist der Vorgang nochmal verdeutlicht."),r("br"),r("img",{attrs:{src:i(50),alt:"merkle_tree",title:"Beispiel eines Hash-Baums."}}),e._v("\nAbbildung entnommen und angepasst aus "),r("a",[r("a",{attrs:{href:"#ref_Vuji%C4%8Di%C4%8718"}},[e._v("[Vujičić18]")])])]),r("p",[e._v("Zuerst wird für jede Transaktion (TX0 bis TX3) ein Hash-Wert (Hash0 bis Hash3) generiert. Anschließend wird für jeweils zwei benachbarte Hash-Werte (z.B. Hash0 und Hash1) noch ein dritter Hash-Wert (Hash01) gebildet. In der Abbildung wird so aus Hash0 und Hash1 der darüberliegende Knoten Hash01. Wenn der Block mehr als vier Transaktionen halten würde hätte der Hash-Baum mehr Ebenen als in der Abbildung. Im Block header wird die Wurzel des Baums gespeichert. In vielen Blockchain Systemen werden nach der Verifizierung des Blocks alle Knoten des Hash-Baums gelöscht um Speicherplatz einzusparen. Nur die Wurzel und die Transaktionen bleiben erhalten, da die Wurzel zum überprüfen ausreicht. Falls nachträglich jemand versucht z.B. die Transaktion TX0 zu manipulieren so würde dies bei einer Verifizierung auffallen, da sich der Hash-Wert der Transaktion verändert und somit auch der von dem Knoten Hash01. So propergiert der Fehler sich bis zur Wurzel und somit kann eine Manipulation erkannt werden. Theoretisch würde es reichen für alle Transaktionen nur einen Hash-Wert abzuspeichern, jedoch kann dann nicht nachvollzogen werden welche der Transaktionen manipuliert wurde.")]),r("p",[r("a",[r("a",{attrs:{href:"#ref_Vuji%C4%8Di%C4%8718"}},[e._v("[Vujičić18]")])])]),r("h2",{attrs:{id:"crypto-economics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#crypto-economics","aria-hidden":"true"}},[e._v("#")]),e._v(" Crypto-Economics")]),r("p",[e._v("Autor: Kevin Schima")]),r("h3",{attrs:{id:"abgrenzung-token-coins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#abgrenzung-token-coins","aria-hidden":"true"}},[e._v("#")]),e._v(" Abgrenzung: Token / Coins")]),r("h3",{attrs:{id:"tokenization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tokenization","aria-hidden":"true"}},[e._v("#")]),e._v(" Tokenization")]),r("h3",{attrs:{id:"initial-coin-offering-ico"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#initial-coin-offering-ico","aria-hidden":"true"}},[e._v("#")]),e._v(" Initial Coin Offering (ICO)")]),r("p",[e._v("Ein Initial Coin Offering ist eine, bis dato, weitgehend unregulierte Methode der Kapitalaufnahme bei der im Gegensatz zum klassischen Initial Public Offering (IPO) (deutsch: Börsengang), die Kapitalaufnahme in Form von Kryptowährungen erfolgt. Vergleichbar mit dem Börsenhandel bei dem mit Echtgeldwährungen (FIAT Währungen) Anteile an einem Unternehmen in Form von Aktien erworben werden können, werden bei einem ICO üblicherweise Token ausgegeben die mittels Kryptowährungen gekauft werden. Die Mindestinvestition ist, ähnlich wie bei Crowdfunding Finanzierungsmodellen, so niedrig, dass auch private Kleininvestoren partizipieren können. "),r("a",[r("a",{attrs:{href:"#ref_hahn18"}},[e._v("[HAHN18]")])])]),r("p",[e._v("Während der traditionelle Finanzmarkt durch nationale und internationale Finanzaufsichten rechtlich stark reguliert ist, ist dies bei den neuartigen ICOs durch die rasante technische Entwicklung und unterstützt durch die anonymen bzw. pseudonymen Transaktionen von Kryptowährungen bisher kaum der Fall.")]),r("h4",{attrs:{id:"typischer-ablauf-eines-icos-basierend-auf-ethereum-erc20-token"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#typischer-ablauf-eines-icos-basierend-auf-ethereum-erc20-token","aria-hidden":"true"}},[e._v("#")]),e._v(" Typischer Ablauf eines ICOs basierend auf Ethereum (ERC20) Token")]),r("ul",[r("li",[r("p",[e._v("Ein Unternehmen bzw. loses Entwicklerkollektiv veröffentlich ein Whitepaper in dem eine Geschäftsidee / Anwendungsbereich für den Token und eventuell zukünftige Entwicklungsziele formuliert sind")])]),r("li",[r("p",[e._v("Ein Smart Contract auf ERC20 Basis wird für den ICO erstellt in dem unteranderem Bezeichnung und Maximalmenge an Token definiert wird")])]),r("li",[r("p",[e._v("Der Token Verkauf (Sale) beginnt, der ICO Ersteller legt einen initialen Verkaufspreis fest, bespielsweise 1000 Token / 1 Ether")])]),r("li",[r("p",[e._v("Der Token Sale endet")])]),r("li",[r("p",[e._v("Der Token wird an speziellen Kryptowährungs / Token Börsen gelistet, und kann öffentlich gehandelt werden, der Wert der Token wird durch die Marktmechanismen Angebot/Nachfrage bestimmt")])])]),r("p",[e._v("Für die Investoren des ICOs hat sich der Wert der Token im Idealfall durch mediale Aufmerksamkeit, Entwicklungsfortschritt und Kooperationen mit anderen Unternehmen gegenüber des intialen Sales bzw. Pre-Sales vervielfacht.")]),r("h4",{attrs:{id:"risiken"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#risiken","aria-hidden":"true"}},[e._v("#")]),e._v(" Risiken")]),r("h2",{attrs:{id:"herausforderungen-und-risiken"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#herausforderungen-und-risiken","aria-hidden":"true"}},[e._v("#")]),e._v(" Herausforderungen und Risiken")]),r("h3",{attrs:{id:"technische-herausforderungen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#technische-herausforderungen","aria-hidden":"true"}},[e._v("#")]),e._v(" Technische Herausforderungen")]),r("p",[e._v("Autor: Fynn Klöpper")]),r("p",[e._v("Angriffsszenarios (Sybil attack, 51%-Attack)\nSkalierung (-sprobleme)")]),r("p",[e._v("Quellen:\nhttps://www.freehaven.net/anonbib/cache/sybil.pdf")]),r("h4",{attrs:{id:"angriffsszenarien"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#angriffsszenarien","aria-hidden":"true"}},[e._v("#")]),e._v(" Angriffsszenarien")]),r("h5",{attrs:{id:"sybil-attacke"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sybil-attacke","aria-hidden":"true"}},[e._v("#")]),e._v(" Sybil Attacke")]),r("h6",{attrs:{id:"definition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#definition","aria-hidden":"true"}},[e._v("#")]),e._v(" Definition")]),r("p",[e._v("Eine Sybil-Attacke beschreibt eine Art des Angriffs auf eine Blockchain, bei der eine schadhafte Entität mehrere Identitäten vorgibt, um einen substantiellen Teil des Systems zu kontrollieren und so die Sicherheit der Redundanz zu komprimieren.")]),r("p",[e._v("Für Peer-to-Peer-Systeme ist es essentiell, dass Daten redundant gespeichert werden. Durch die Redundanz der Speicherung derselben Daten auf verschiedenen Entitäten kann so die Integrität der Daten sichergestellt werden. Weiterhin setzen viele P2P-Systeme auf die Fragmentierung der Daten, um sich gegen Datenlecks abzusichern.")]),r("p",[e._v("Falls das System scheitert Identitäten zu Entitäten zu mappen, kann nun eine Entität mehrere Identitäten vortäuschen und von dem System mehrmals Daten oder zusammenhängende Daten zugewiesen bekommen. Hierdurch wäre die Redundanz, als auch die Fragmentierung der Daten komprimiert.")]),r("h6",{attrs:{id:"losungsansatze"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#losungsansatze","aria-hidden":"true"}},[e._v("#")]),e._v(" Lösungsansätze")]),r("p",[e._v("Mit Identifizierungs-Authorität:")]),r("ul",[r("li",[e._v("VeriSign")]),r("li",[e._v("CFS")]),r("li",[e._v("SFS")]),r("li",[e._v("EMBASSY")]),r("li",[e._v("ICANN / Wave Systems")])]),r("p",[e._v("Ohne Identifzierungs-Authorität:")]),r("p",[e._v("Ein Schutz ohne dedizierte Identifizierungs-Authorität stellt sich als äußerst schwierig heraus.\nOftmals fällt der erste Gedanke auf ein System, bei dem ältere, etablierte Identitäten neue Identitäten kollektiv verifizieren. Dieser Lösungsansatz geht allerdings davon aus, dass die erste Generation von Identitäten vertrauenswürdig ist, welche bereits durch eine Sybil-Attacke komprimiert sein könnte und somit den weiteren Verlauf der Kette unsicher macht.")]),r("h5",{attrs:{id:"_51-attack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_51-attack","aria-hidden":"true"}},[e._v("#")]),e._v(" 51%-Attack")]),r("h6",{attrs:{id:"definition-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#definition-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Definition")]),r("h6",{attrs:{id:"losungsansatze-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#losungsansatze-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Lösungsansätze")]),r("h4",{attrs:{id:"skalierung-sprobleme"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#skalierung-sprobleme","aria-hidden":"true"}},[e._v("#")]),e._v(" Skalierung (-sprobleme)")]),r("h3",{attrs:{id:"okonomische-und-gesellschaftliche-herausforderungen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#okonomische-und-gesellschaftliche-herausforderungen","aria-hidden":"true"}},[e._v("#")]),e._v(" Ökonomische und gesellschaftliche Herausforderungen")]),r("p",[e._v("Autoren: Mario Cichonczyk und Martin Teuber")]),r("p",[e._v("Konsequenzen\nSozial-wissenschaftlich\nbetriebswirtschaftlich")]),r("p",[e._v("=======")]),r("h4",{attrs:{id:"okonomische-implikationen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#okonomische-implikationen","aria-hidden":"true"}},[e._v("#")]),e._v(" Ökonomische Implikationen")]),r("p",[e._v("Autor: Mario Cichonczyk")]),r("h5",{attrs:{id:"intermediation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#intermediation","aria-hidden":"true"}},[e._v("#")]),e._v(" Intermediation")]),r("p",[e._v("Im Intermediationskonzept agieren nach "),r("a",[r("a",{attrs:{href:"#ref_walter07"}},[e._v("[WALTER07]")])]),e._v(" unabhängige, gewinnmaximierende ökonomische Agenten basierend auf den Bedürfnissen der Vermittlung von Angebot und Nachfrage. Die Aufhebung von Marktintransparenzen unter Erhebung einer Vermittlungsgebühr bildet dabei den Ertragsüberschuss im Cashflow des Intermediärs. Das Ziel ist also je nach Anwendungsfall die Allokation von Angebot->Nachfrage oder Nachfrage->Angebot.")]),r("p",[e._v("Wenn ein Marktteilnehmer dem Markt beitritt ist er mit der unbestimmt zeitverzögerten Suche nach seinem Vertragspartner konfrontiert. Das Resultat sind Suchkosten, die sich vorab nur schwierig beziffern lassen. Ein Zwischenhändler bietet die Fixierung von Kosten und/oder Zeit, die zwischen Anbahnung und Vertragsschluss aufgewendet werden müssen. Intermediäre haben demnach eine ständige Präsenz am Markt, da sie im Vergleich zu ihren Vertragspartnern den Handel nach Vertragsschluss nicht verlassen. Wenn ein Asset in ihren Besitz übergeht, leiten sie es an Käufer weiter, welche das Asset höherwertig beziffern. Vergleichbar versuchen diese das Asset aus Quellen zu beschaffen, die es geringwertiger einstufen. "),r("a",[r("a",{attrs:{href:"#ref_shen16"}},[e._v("[SHEN16]")])]),e._v(". Intermediäre schöpfen also Wert, wenn ein Assetflow mit Unkenntnis über den Gesamtmarkt verknüpft ist. Dieses Nichtwissen ist das Resultat der imperfekten Natur realer Märkte, in denen die vollständige Information über alle Produzenten und Konsumenten nicht vorliegt "),r("a",[r("a",{attrs:{href:"#ref_budic18"}},[e._v("[BUDIC18]")])]),e._v(".")]),r("p",[e._v("Offensichtlich kann sich auf diese Weise eine komplexe Kette von Handelsstufen zwischen Produkterschaffung und Endverbraucher bilden. Das Hinzukommen von Handelsstufen scheint im Zeitalter des eCommerce aber einem gegenläufigen Trend zu unterliegen"),r("a",[r("a",{attrs:{href:"#ref_etla16"}},[e._v("[ETLA16]")])]),e._v(". Internetunternehmen wie Amazon konsolidieren komplexe Handelsketten in einfach nutzbaren Plattformen. Das Geschäftsmodell der Realweltvermittlung von Kontakten ist in diesem schnelllebigen Kontext nicht mehr nachaltig. Wichtig ist es hier zu beachten, dass das Intermediationsprinzip dennoch weiter existiert. Der heterogene Assetflow zentralisiert sich lediglich in einem monopolistisch geprägten Intermediär. Diese Entwicklung lässt sich teilbegründen mit einer inhärenten Eigenschaft des Internets als verteiltes System: Misstrauen"),r("a",[r("a",{attrs:{href:"#ref_etla16"}},[e._v("[ETLA16]")])]),e._v(". Produzenten und Konsumenten gravitieren zu dem Vermittler, welcher das größte Vertrauen im suspekten Austauschmedium repräsentiert. Diese Beobachtung stellt die Basis des disruptiven Disintermediationspotentials der Blockchain dar.")]),r("p",[e._v("TODO: Risiken,  Bedeutung")]),r("h5",{attrs:{id:"wertschopfungstransparenz"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wertschopfungstransparenz","aria-hidden":"true"}},[e._v("#")]),e._v(" Wertschöpfungstransparenz")]),r("p",[e._v("...")]),r("h5",{attrs:{id:"wirtschaftsautomation-m2m-transaktionen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wirtschaftsautomation-m2m-transaktionen","aria-hidden":"true"}},[e._v("#")]),e._v(" Wirtschaftsautomation - M2M Transaktionen")]),r("p",[e._v("...")]),r("h2",{attrs:{id:"literaturverzeichnis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#literaturverzeichnis","aria-hidden":"true"}},[e._v("#")]),e._v(" Literaturverzeichnis")]),r("p",[r("a",{attrs:{name:"ref_walter07"}},[e._v("[WALTER07]")]),e._v(": Walter, Benedikt: Intermediation und Digitalisierung. Springer-Verlag, 2007, ISBN: 3835096303\n"),r("a",{attrs:{name:"ref_shen16"}},[e._v("[SHEN16]")]),e._v(": Shen, Ji ; Wei, Bin ; Yan, Hongjun: Financial Intermediation Chains in an OTC Market. 2016, SSRN: https://ssrn.com/abstract=2577497\n"),r("a",{attrs:{name:"ref_budic18"}},[e._v("[BUDIC18]")]),e._v(": BusinessDictionary.com : What is intermediation? definition and meaning ; URL: http://www.businessdictionary.com/definition/intermediation.html ; Date Accessed: April 29, 2018\n"),r("a",{attrs:{name:"ref_etla16"}},[e._v("[ETLA16]")]),e._v(": ETLA; Mattila, Juri: The Blockchain Phenomenon – The Disruptive Potential of Distributed Consensus Architectures. ETLA Working Papers, 2016 ; ISSN: 2323-2420")]),r("p",[r("a",{attrs:{name:"ref_Zheng17"}},[e._v("[ZHENG17]")]),e._v(": Zheng, Zibin ; Xie, Shaoan ; Dai, Hongning ; Chen, Xiangping ; Wang, Huaimin : An Overview of Blockchain Technology: Architecture, Consensus, and Future Trends. Honolulu, HI, USA : IEEE International Congress on Big Data, 2017, ISBN: 978-1-5386-1996-4")]),r("p",[r("a",{attrs:{name:"ref_Vujičić18"}},[e._v("[Vujičić18]")]),e._v(": Vujičić, Dejan ; Jagodić, Dijana ; Ranđić, Siniša : Blockchain Technology, Bitcoin, and Ethereum: A Brief Overview. East Sarajevo, Bosnia and Herzegovina : IEEE INFOTEH-JAHORINA (INFOTEH), 17th International Symposium, 2018, ISBN: 978-1-5386-4907-7")]),r("p",[r("a",{attrs:{name:"ref_Hofmann17"}},[e._v("[Hofmann17]")]),e._v(": Hofmann, Frank ; Wurster, Simone ; Eyal, Ron ; Böhmecke-Schwafert, Moritz : The immutability concept of blockchains and benefits of early standardization. Nanjing, China : ITU Kaleidoscope: Challenges for a Data-Driven Society (ITU K), 2017, ISBN: 978-9-2612-4281-7")]),r("p",[r("a",{attrs:{name:"ref_hahn18"}},[e._v("[HAHN18]")]),e._v(": Hahn, Christopher ; Wons, Adrian: Initial Coin Offering (ICO) - Unternehmensfinanzierung auf Basis der Blockchain-Technologie. Gabler Verlag, 2018, ISBN: 978-3-658-21786-0")])])}],t=i(0),a=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);n.default=a.exports}}]);