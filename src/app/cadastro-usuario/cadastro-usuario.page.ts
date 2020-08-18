import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
user: User;
  constructor(private userService : UsersService, public router: Router ) {
    this.user = new User();
   }

  ngOnInit() {
  }
  
  cadastrarUsuario(){
    this.userService.cadastrarUsuario(this.user).subscribe((response) => {
      this.router.navigate(['/login']);

  })
}

}
