
## Bitcoin 

Bitcoin ist eine sogenannte Kryptowährung, die ohne eine zentrale Kontrollinstanz (wie z.b. eine Bank) auskommt. Stattdessen bilden alle, die am Zahlungsverkehr mit Bitcoin teilnehmen wollen, ein Netzwerk von Knoten, eine sogenannte Blockchain. Die Bitcoin-Blockchain fungiert als Kontrollinstanz. In ihr werden alle Transaktionen mit Bitcoins vermerkt, und alle Teilnehmer des Netzwerks sind gemeinsam dafür verantwortlich, dass die zugrunde liegende Blockchain aktuell und konsistent ist. Um eine Überweisung mit Bitcoins vornehmen zu können, müssen Sender und Empfänger eine aktuelle Kopie der Blockchain haben. Jede Transaktion im Bitcoin-Netzwerk wird kryptografisch abgesichert.

### Geschichte

Das Bitcoin-Netzwerk wurde im Jahr 2008 erstmals theoretisch beschrieben und 2009 praktisch umgesetzt. Das Konzept kryptografischer Währungen wurde bereits 1998 veröffentlicht.

### Bootstrapping

Um sich initial mit anderen Knoten zu verbinden, nutzt der Bitcoin einen sogenannten "Bootstrapping"-Prozess. Mehrere Knoten des Netzwerks fungieren als Startknoten, die die Addressen weiterer Knoten an neue Knoten verteilen. Die Addressen der Startknoten sind im Domain-Name-System eingetragen, welches der Bitcoin-Client nutzt, um die Addressen der Startknoten zu erhalten. Nachdem die initiale Verbindung erfolgt ist und die Addressen weiterer Knoten von den startknoten weitergegeben wurden, kommmt das Bitcoin-Netzwerk auch ohne die Startknoten aus.

### Transaktionen 

Jede Transaktion im Bitcoin-Netzwerk besteht aus der kryptografischen Signatur des Senders und dem mit dem Public-Key des Empfängers signierten Hash der vorherigen Transaktion. Auf diese Weise kann der Empfänger die Transaktion verifizieren. Transaktionen werden an alle Knoten im Netzwerk verteilt. [NAKA08] Jede Transaktion hat beim Bitcoin mehrere In- und Outputs, um die Transaktion in mehrere Teilbeträge zerlegen zu können.

### Zeitstempel

Damit jeder Knoten die Transaktionen zeitlich einordnen kann, implementiert Bitcoin einen verteilten Zeitstempel-Server. [NAKA08] Der Zeitstempel besteht aus dem Hashwert der Daten, die einen Zeitstempel erhalten sollen, sowie dem Hashwert des vorherigen Zeitstempels.

### Proof-of-Work

Der Bitcoin nutzt einen Proof-of-Work Algorithmus zu Entscheidungsfindung über neue Blöcke. Dabei wird innerhalb des neuen Blocks ein spezieller Wert, eine sogennante *Nonce*, angelegt. Dieser Wert wird solange erhöht, bis ein Hash für den Block gefunden wird, der mit einer bestimmten Anzahl Nullen beginnt. Über die benötigte Anzahl Nullen kann die Schwierigkeit des Proof-of-Work angepasst werden. Beim Bitcoin wird die Schwierigkeit automatisch so angepasst, dass ein neuer Block etwa alle 10 Minuten gefunden wird.

### Protokoll

Mining, UTXO etc.

### Literatur

[NAKA08] Nakamoto, S., Bitcoin: A peer-to-peer electronic cash system., 2008

