# rajkot-tech


## Build Setup

```bash

$ hugo server 

```

## How to create event/meetup in Rajkot tech website:

1. First create {meetup-name}.md file with below command
   -  hugo new meetups/{meetup-name}.md
   -  e.g.  if meetup name is Laravel Rajkot Meetup April 2023
             Then command hugo new meetups/laravel-rajkot-meetup-april-2023.md
   - above command create laravel-rajkot-meetup-april-2023.md file inside meetups in  
     content folder   


   - That have below data that you need to fill

```  
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
width: 12
startDate: {{ .Date }}
endDate: {{ .Date }}
image: ""
meetupDate: {{ .Date }}
gallery:
   - name: ""
address: ""
buyTicket: “”
talk:
   - name: ""
     path: ""
locationOnMap: "" 
metaTitle: ""
metaDes: ""
```

   Example: 
   - If you created laravel-rajkot-meetup-april-2023.md file then

```
---
title: "Laravel Rajkot Meetup April 2023" //already given when       
                                             created
date: 2023-12-16T15:30:28+05:30  // already given when created
draft: false  // already given when created
width: 12   // already given when created
startDate: 2023-12-16T15:30:28+05:30  // already given when created
							Need to replace just date 
							And time
endDate: 2023-12-16T15:30:28+05:30  // already given when created
							Need to replace just date 
							And time


image: "/images/meetups/april.png" // this image you can store inside assets/images/
                                        meetups  and give path like this
meetupDate: 2023-12-16T15:30:28+05:30  // already given when created
							Need to replace just date 
							And time
gallery:
   - name: "/images/{meetup-name}/—--.webp"  //  this image you can store after    
                                   creating folder inside assets/images/{meetup-name} and give path like this
   - name: "/images/{meetup-name}/—--.webp"	
buyTicket: "https://allevents.in/rajkot/laravel-rajkot-meetup-october-2023/80002722358523"  // link from that user can buy ticket
address: "RK University Main Campus" // location of meetup
talk: // if there is more than one talk add name and path as below
   - name: Docker From Scratch   // talk name/title
     path: "talks/docker-from-scrach.md"  // talk path that you give
   						    After hugo new command 
locationOnMap: "insert embedded path's src atribute's value from map" 
metaTitle: "Laravel Rajkot Meetup April 2023 | Rajkot-tech"
metaDes: "Laravel Rajkot Meetup April 2023 | Rajkot-tech"
—--


  Add meetup description here


```


                                      


2. Second create {talk-name}.md file with below command
   - hugo new talks/{talk-name}.md
     e.g.  if talk name is Docker From Scratch
             Then command hugo new talks/docker-from-scratch.md
   - above command create docker-from-scratch.md file inside talks in content folder   
   - That have below data that you need to fill


```
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
width: 12
speakers:
   - name: ""
     path: ""
image: ""
metaTitle: ""
metaDes: ""
```


  Example: 
  - If you created docker-from-scratch.md file then

```
---
title: "Docker From Scratch" //already given when created | mention this
                               title and this file path in respective 
                               meetup.md file in talk section
 date: 2024-01-04T18:14:13+05:30  //already given when created
draft: false  //already given when created
width: 12   //already given when created
Speakers:  // mention respective speakers name/Title and their md file 
             path 
   - name: Rakshit Menpara   
     path: "speakers/rakshit.md"
   - name: Munir Khakhi
     path: "speakers/munir.md"
image: ""
metaTitle: "Docker From Scratch | Rajkot tech"
metaDes: "Docker From Scratch | Rajkot tech"
—--

  Add talk description here

```




3. Third create {speaker-name}.md file with below command
   - hugo new speakers/{speaker-name}.md
   - e.g.  if speaker name is Rakshit Menpara
             Then command hugo new speakers/rakshit-menpara.md
   - above command create rakshit-menpara.md file inside speakers in  
     content folder 
   - if you want to use existing speaker then just mention speaker into talk 

   - That have below data that you need to fill

```
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
width: 12
image: ""
linkedin: ""
description: ""
metaTitle: ""
metaDes: ""
---
```


   Example: 
   - If you created rakshit-menpara.md file then

```
---
title: "Rakshit Menpara" //already given when created
date: 2023-12-19T11:40:08+05:30  // already given when created
draft: false  // already given when created
width: 12  // already given when created
image: "/images/speakers/rakshit.webp" // give image path like this and store
                                this image inside assets/images/speakers 
                                 folder
linkedin: "https://www.linkedin.com/in/—--"  // linkedin
description: "CTO | Improwised Technologies Pvt Ltd"  // position
metaTitle: "Rakshit Menpara |Speaker"
metaDes: "Rakshit Menpara | Speaker"
—--

Add speaker description here

```

**Document in wiki**:
https://wiki.improwised.com/s/119e7852-2fd2-4dfc-854a-445c8191f9ec
