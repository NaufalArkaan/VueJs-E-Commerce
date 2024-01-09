const contact = new Vue({
	el: '#biodata',
	data: {
        contacts: [
            { iconClass: 'fa-mail-bulk', name: 'Andi', iconClass: 'fa-mail-bulk', biodata: 'Jabatan: Ketua',  iconClass: 'fa-mail-bulk', phone: '081234567899' },
            { iconClass: 'fa-mail-bulk', name: 'Anto', iconClass: 'fa-headset', biodata: 'Jabatan: Wakil Ketua', iconClass: 'fa-mail-bulk', phone: '089772456908' },
            { iconClass: 'fa-mail-bulk', name: 'Anti', iconClass: 'fa-user-tie', biodata: 'Jabatan: Sekretaris', iconClass: 'fa-mail-bulk', phone: '081778906775' },
        ],
        selectedContact: null
    },
    methods: {
        showContactDetail(contact) {
            this.selectedContact = contact;
        }
    }
});