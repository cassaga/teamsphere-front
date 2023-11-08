import { Component } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {

  post : string[] = [""];

  posts = [
    {user : "Julien",
      postContent : "Salut voici le premier post et du texte aléatoire afin de remplir le champ post ci nommé lol",
      datePublication: "08/11/2023"

    },
    {user : "Willie",
      postContent : "Salut voici le second post ",
      datePublication: "08/11/2023"

    },
    {user : "Jacques",
      postContent : "Salut voici le troisieme post ",
      datePublication: "08/11/2023"

    },
    {user : "Mireille",
      postContent : "Salut voici le cinquième post ",
      datePublication: "08/11/2023"

    },  {user : "Michèle",
      postContent : "Salut voici le sixième post ",
      datePublication: "08/11/2023"

    }

  ]

}
