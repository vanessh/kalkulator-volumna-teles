# Kalkulator volumna teles
## Uvod
```
Pripravljamo vmesnik, ki bo namenjen izračunu prostornine teles, ki imajo za osnovno 
ploskev enega od osnovnih likov (enekostranični trikotnik, krog, pravokotnik). Izvlek 
predmeta je pravokoten na osnovno ploskev. Zraven parametrov, ki določajo osnovno 
ploskev, bo uporabnik podal tudi višino. Iz podanih parametrov program izračuna, obseg 
osnovne ploskve, površino in volumen lika. Posamezen set podatkov je mogoče shraniti in 
kasneje tudi pobrisati.
```

## Stran 1
```
Pripravi spletno formo, kjer bo uporabnik izbral lik in pripadajoče parametre:
        - Trikotnik (dolžina stranice, višina) 
        - Krog (polmer, višina) 
        - Pravokotnik (dolžina tranice a, dolžina stranice b, višina) 
 
Ob vnosu parametrov se naj preveri da je vnos v rangu med 0 in 200 cm. 
 
Program ob vsaki spremebi posodobi preračun podatkov: 
        - obseg osnovne ploskve 
        - površino osnovne ploskve 
        - volumen
```

## Stran 2
```
Podane parametre je možno shraniti v seznam. Uporabnik sam poda ime seta, ki ga 
shranjuje. Shranjeni seti so vidni na posebni strani, kjer je mogoče: 
        - filtrirati shranjene zapise po izbranem liku 
        - izbrisati shranjen set 
        - odpreti shranjen set (odpre se forma z podatki, ki jih je uporabnik shranil na strani 1)
```

Če znaš lahko pripraviš stran v Vue.js. Sprejeli bomo stran tudi v kakšnem drugem SPA 
frameworku ali v čistem JS. 

