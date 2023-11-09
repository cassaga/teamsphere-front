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
      postContent : "SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      datePublication: "08/11/2023"

    },
    {user : "Willie",
      postContent : "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,",
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
