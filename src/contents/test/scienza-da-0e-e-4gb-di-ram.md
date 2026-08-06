---
title: La scienza da 0€ e 4 GB di RAM
published: 2026-08-05
description: Cosa succede quando provi a fare ricerca senza laboratorio, senza budget e con un'orchestra di AI
author: Fabrizio Terzi
category: Diary
tags: [Pyragogy, Entangletronica, AI, Open Science]
bannerImage: /banner/15.webp
cover: /banner/15.webp
draft: true
---

Tutto è iniziato quasi per caso.

Stavo cercando di capire alcuni contenuti di fisica incontrati in un video di YouTube. Ho iniziato a raccogliere concetti, fare domande, confrontare spiegazioni.

Poi è successo quello che spesso succede quando si lascia una domanda aperta abbastanza a lungo:

**la domanda ha iniziato a produrne altre.**

A un certo punto non volevo più soltanto capire quello che stavo leggendo.

Volevo sapere se un'intuizione potesse essere trasformata in qualcosa di formalizzabile, simulabile e, soprattutto, criticabile da altri.

Il problema era evidente.

Non sono un fisico.

Non ho un laboratorio.

Non ho una workstation.

Non ho un gruppo di ricerca.

E non avevo un budget.

Avevo però un vecchio laptop con **4 GB di RAM**, accesso a modelli AI disponibili gratuitamente e una quantità probabilmente eccessiva di curiosità.

Così ho deciso di provare.

Non a dimostrare che l'AI può sostituire uno scienziato. Quella sarebbe stata una conclusione ridicola da assumere prima ancora di cominciare.

Volevo provare qualcosa di diverso:

**quanto può diventare ambizioso un processo di ricerca quando una persona può orchestrare più sistemi di AI come strumenti cognitivi specializzati?**

---

## Non un chatbot. Un piccolo ambiente di ricerca.

La prima decisione è stata fondamentale.

Non avrei utilizzato un unico modello per chiedere:

> "Fammi una ricerca scientifica."

Ho invece iniziato a distribuire il lavoro.

Un modello poteva aiutarmi a esplorare un'idea.

Un altro a trasformarla in un modello formale.

Un altro ancora a scrivere o analizzare il codice.

Un altro aveva il compito più importante: **provare a rompere quello che gli altri avevano costruito.**

Io tenevo insieme tutto.

Decidevo quali domande passare da un modello all'altro, quali risposte accettare provvisoriamente, quali verificare, quali confrontare e quali rigettare.

Non era una catena di prompt.

Era un ciclo:

<div class="cycle-flow" role="list" aria-label="ciclo di ricerca">
  <span class="cycle-chip">idea</span><span class="cycle-arrow" aria-hidden="true">→</span>
  <span class="cycle-chip">AI</span><span class="cycle-arrow" aria-hidden="true">→</span>
  <span class="cycle-chip">critica</span><span class="cycle-arrow" aria-hidden="true">→</span>
  <span class="cycle-chip">verifica</span><span class="cycle-arrow" aria-hidden="true">→</span>
  <span class="cycle-chip">nuova domanda</span><span class="cycle-arrow" aria-hidden="true">→</span>
  <span class="cycle-chip">AI</span>
</div>

Ed è stato proprio questo ciclo a trasformare una curiosità iniziale in un progetto.

---

## La domanda non era "l'AI ha ragione?"

Era:

**come faccio a sapere quando l'AI ha torto?**

Questa è stata probabilmente la domanda più importante dell'intero esperimento.

I modelli sono straordinariamente bravi a produrre qualcosa che *sembra* corretto.

Una spiegazione può essere elegante.

Un'equazione può essere perfettamente formattata.

Un grafico può sembrare convincente.

Un numero può avere esattamente l'aspetto del numero che ci aspetteremmo.

E tutto questo non significa che sia vero.

A un certo punto abbiamo trovato un errore.

Un risultato numerico generato durante il lavoro non era coerente con il modello da cui avrebbe dovuto derivare. Non era un piccolo refuso: era una contraddizione interna.

Ed è qui che l'esperimento ha cambiato natura.

Non si trattava più di vedere quanto velocemente l'AI potesse produrre materiale scientifico.

Si trattava di vedere se riuscivamo a costruire un processo capace di **accorgersi che quel materiale era sbagliato**.

Abbiamo fermato il flusso.

Abbiamo isolato il problema.

Abbiamo rifatto i passaggi.

Abbiamo confrontato le interpretazioni.

Poi ho corretto il risultato.

E soprattutto abbiamo lasciato traccia dell'errore.

Non lo abbiamo cancellato dalla storia per rendere il risultato finale più bello.

---

## Poi è successo qualcosa di ancora più interessante

Una volta ottenuto un primo risultato numerico, la domanda successiva non è stata:

> "Possiamo pubblicarlo?"

È stata:

> **"Quanto ci possiamo fidare?"**

E questa domanda ha generato altre domande.

Il modello è stabile?

Il risultato dipende dai parametri numerici?

Stiamo osservando qualcosa che appartiene davvero al modello oppure qualcosa che abbiamo introdotto noi nel modo in cui lo misuriamo?

Quando una risposta sembra non convergere, il problema è nella simulazione o nel modo in cui abbiamo deciso di leggerla?

Ogni volta che emergeva una risposta, cercavamo la domanda successiva che avrebbe potuto distruggerla.

Questa è stata la parte che mi ha interessato di più.

L'AI non era più soltanto uno strumento per **generare risposte**.

Era diventata uno strumento per **generare obiezioni**.

E io ero costretto a fare qualcosa di molto meno spettacolare ma molto più importante:

decidere quali obiezioni meritavano di essere prese sul serio.

---

## Il risultato non è soltanto Entangletronica

Alla fine abbiamo prodotto uno studio numerico su una possibile architettura di interferenza elettronica.

Ma, sinceramente, non è questa la cosa che considero più interessante.

Il vero risultato dell'esperimento è il processo che è rimasto dietro.

Abbiamo trasformato una sequenza di conversazioni con modelli AI in un artefatto pubblico:

* codice sorgente;
* simulazioni;
* test;
* risultati;
* documentazione;
* figure;
* revisioni;
* correzioni;
* cronologia dei commit;
* versioni congelate;
* un record scientifico persistente.

Tutto è pubblico.

La repository non contiene soltanto il risultato finale.

Contiene anche la storia attraverso cui ci siamo arrivati.

Questo per me è **Open Science** in un senso molto concreto.

Non soltanto:

> "ecco il nostro risultato, fidatevi."

Ma:

> "ecco cosa abbiamo fatto. Ecco cosa abbiamo sbagliato. Ecco cosa abbiamo corretto. Ecco il codice. Ecco i dati. Ecco la versione che abbiamo congelato. Provate a romperla."

---

## 0€ non significa 0 costo

Questo punto va detto chiaramente.

Non voglio raccontare la favola del genio con il computer vecchio che sostituisce un laboratorio universitario.

Non è così.

Il costo economico dell'esperimento è stato quasi nullo.

Il costo cognitivo no.

Sono servite ore. Molte.

E soprattutto è servito imparare abbastanza da capire quando una risposta non aveva senso, anche quando non ero in grado di conoscere immediatamente la risposta corretta.

È qui che penso che il discorso sull'AI venga spesso affrontato dal lato sbagliato.

Il valore non sta semplicemente nell'avere una macchina che "sa" più cose di noi.

Sta nella possibilità di costruire **sistemi di lavoro nei quali le capacità dell'AI e quelle umane compensano reciprocamente le proprie debolezze.**

L'AI può esplorare enormi spazi di possibilità.

L'essere umano deve ancora decidere quali possibilità meritano attenzione.

L'AI può produrre codice.

L'essere umano deve chiedersi se quel codice sta davvero calcolando ciò che crede.

L'AI può trovare una soluzione.

L'essere umano deve decidere quale domanda valga la pena porre dopo.

---

## E questo è il punto di Pyragogy

Pyragogy non nasce per insegnare alle persone a "usare ChatGPT".

Quella è una competenza troppo piccola per ciò che sta succedendo.

La domanda che mi interessa è più radicale:

**come cambiano apprendimento, ricerca e produzione di conoscenza quando l'intelligenza umana può essere continuamente aumentata, contraddetta e messa alla prova da sistemi artificiali?**

Entangletronica è stato, per me, un piccolo esperimento su questa domanda.

Non avevo bisogno di dimostrare che una persona senza formazione accademica può diventare improvvisamente un fisico.

Non può.

Avevo bisogno di capire se quella persona poteva **arrivare abbastanza lontano da formulare una domanda interessante, costruire un modello, trovare i propri errori, sottoporlo a critica e lasciare dietro di sé un artefatto che altri potessero esaminare.**

Questa possibilità mi sembra molto più importante.

Perché democratizzare la ricerca non significa promettere che tutti possono fare tutto.

Significa abbassare il costo necessario per arrivare al punto in cui una buona domanda può finalmente essere presa sul serio.

---

## Non chiedetemi se è una scoperta

Non lo so.

E non è questo il punto.

Entangletronica è uno **studio numerico pubblicato apertamente**, non una dimostrazione sperimentale e non una scoperta che chiedo alla comunità di accettare sulla parola.

Il record scientifico è su Zenodo.

La repository è su GitHub.

La storia del progetto è nei commit.

E il lavoro è lì perché possa essere criticato.

### [Entangletronica — GitHub](https://github.com/FTG-003/entangletronica)

### [Entangletronica — Zenodo](https://zenodo.org/records/21819297)

Il PDF, per leggerlo qui senza uscire:

<iframe
  src="/entangletronica/EQLI_PhaseGate_Benchmark_2026.pdf"
  title="EQLI_PhaseGate_Benchmark_2026.pdf — studio numerico Entangletronica"
  loading="lazy"
  style="width:100%; height:72vh; border:1px solid #d1d5db; border-radius:6px; background:#fff;"
></iframe>

<small>Se il visualizzatore non parte, [scaricatelo](/entangletronica/EQLI_PhaseGate_Benchmark_2026.pdf) — è lo stesso file del record Zenodo.</small>

Se siete fisici, ingegneri, programmatori, ricercatori o semplicemente persone abbastanza curiose da voler capire cosa succede quando un essere umano orchestra più AI intorno a una domanda difficile:

**non credetemi.**

Andate a guardare.

Provate a trovare l'errore che non abbiamo trovato.

Provate a rompere il modello.

Provate a contestare le nostre assunzioni.

Perché forse è questa la parte più importante dell'esperimento.

Non abbiamo costruito un sistema per dimostrare che avevamo ragione.

Abbiamo costruito un sistema nel quale **potevamo scoprire di avere torto senza dover nascondere le prove.**

E se questa è una delle forme che la ricerca può assumere nell'era dell'AI, allora penso che valga la pena continuare a sperimentare.
