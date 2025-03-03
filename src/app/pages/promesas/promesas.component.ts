import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrl: './promesas.component.css'
})
export class PromesasComponent implements OnInit{
  ngOnInit(): void {
    // const promesa = new Promise((resolve, reject)=>{
    //   if(false){
    //     resolve('Hola mundo');
    //   }else{
    //     reject('Algo salio mal')
    //   }
    // });

    // promesa.then((msg)=>{
    //   console.log('Hey Terminé:',msg);
    // })
    // .catch((err)=>{
    //   console.log('Error:',err);

    // })

    // console.log('Fin del Init');

    this.getUsuarios().then(data => console.log(data));

  }

  getUsuarios(){
    return new Promise((resolve)=>{

      fetch('https://reqres.in/api/users?page=2')
      .then(resp =>resp.json())
      .then(body =>{
        resolve( body.data);
      })
    })
  }

}
