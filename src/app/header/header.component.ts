import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  constructor(
    private confirmationService: ConfirmationService, 
    private messageService: MessageService,
    private router: Router
    ) {}

  confirm(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Successfully Logged out' });
            this.router.navigate(['login']);
        },
        reject: () => {
        }
    });
}

  ngOnInit() {
      this.items = [
        {
          label: 'Dashboard',
          routerLink:'/dashboard'
        },
        {
            label: 'Setup',
            icon: 'pi pi-bars',
            items: [
                {
                    label: 'Users',
                    icon: 'pi pi-users',
                    routerLink:'/users'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    routerLink:'/settings'
                },
            ]
        },
      ];
  }
}
