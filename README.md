# CounterGame

Benvenuto in CounterGame.

L'esercizio prevede un component padre che contiene un component ChildComponent.
Il ChildComponent ha al suo interno un contatore che cresce velocemente (+1 ogni 300ms).

- Fare in modo che il child component interrompa il contatore ed invii al padre il numero al quale si è fermato [1]
  Se il numero al quale si è fermato è uguale al numero randomico che il padre aveva deciso, mostrare un messaggio di vittoria.
  Se il numero non è corretto, mostrare un messaggio di perdita.

- Aggiungere nel component AppChild un bottone che permette di resettare il gioco, facendo generare un nuovo numero random al component Padre, e facendo ripartire il counter.

[1]: Per interrompere setInterval, richiamare la funzione `clearInterval(...)` dandogli come parametro il risultato ottenuto dalla `setInterval`
