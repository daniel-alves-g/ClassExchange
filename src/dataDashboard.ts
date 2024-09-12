import { Users, BookAIcon, HouseIcon, BadgeCheck, SquareX, CircleAlert, BellRing, School, GraduationCap, User } from "lucide-react";

export const itensMenuProfessor = [
    { id: 1, title: 'Painel', link: '/dashboard/painel', icon: 'dashboard' },
    { id: 2, title: 'Substituição', link: '/dashboard/substituicao', icon: 'substituicao' },
    { id: 3, title: 'Troca', link: '/dashboard/troca', icon: 'troca' },
    { id: 4, title: 'Documentos', link: '/dashboard/docs', icon: 'solicitacoes' },
    { id: 5, title: 'Configurações', link: '/dashboard/configuracoes', icon: 'settings' },

];
export const itensMenuCoordenador = [
    { id: 1, title: 'Dashboard', link: '/dashboard/cpainel', icon: 'dashboard' },
    { id: 2, title: 'Usuários', link: '/dashboard/users', icon: 'users' },
    { id: 3, title: 'Substituição', link: '/dashboard/substituicao', icon: 'substituicao' },
    { id: 4, title: 'Troca', link: '/dashboard/troca', icon: 'troca' },
    { id: 5, title: 'Solicitações', link: '/dashboard/docs', icon: 'solicitacoes' },
    { id: 6, title: 'Configurações', link: '/dashboard/configuracoes', icon: 'settings' },

];
export const itensMenuDiretor = [
    { id: 1, title: 'Dashboard', link: '/dashboard/dpainel', icon: 'dashboard' },
    { id: 2, title: 'Usuários', link: '/dashboard/users', icon: 'users' },
    { id: 3, title: 'Solicitações', link: '/dashboard/docs', icon: 'solicitacoes' },
    { id: 4, title: 'Configurações', link: '/dashboard/configuracoes', icon: 'settings' },

]

export const itensMenuAdmin = [
    { id: 1, title: 'Dashboard', link: '/dashboard', icon: 'dashboard' },
    { id: 2, title: 'Usuários', link: '/dashboard/users', icon: 'users' },
    { id: 3, title: 'Substituição', link: '/dashboard/substituicao', icon: 'substituicao' },
    { id: 4, title: 'Troca', link: '/dashboard/troca', icon: 'troca' },
    { id: 5, title: 'Solicitações', link: '/dashboard/docs', icon: 'solicitacoes' },
    { id: 6, title: 'Configurações', link: '/dashboard/configuracoes', icon: 'settings' },

]

export const getMenuItemsByRole = (role: string) => {
    switch (role) {
        case 'admin':
            return itensMenuAdmin;
        case 'diretor':
            return itensMenuDiretor;
        case 'coordenador':
            return itensMenuCoordenador;
        case 'professor':
            return itensMenuProfessor;
        default:
            return [];
    }
};

export const seed = {
    cardData: [
        {
            id: 1001,
            Label: 'Campus',
            amout: '4',
            description: 'Campus cadastrados',
            icon: School,
        },
        {
            id: 1002,
            Label: 'Diretores',
            amout: '4',
            description: 'Duretores cadastrados',
            icon: GraduationCap,
        },
        {
            id: 1003,
            Label: 'Coordenadores',
            amout: '123',
            description: 'Coordenadores cadastrados',
            icon: Users,
        },
        {
            id: 1004,
            Label: 'Cursos',
            amout: '75',
            description: 'Cursos cadastrados',
            icon: BookAIcon,
        },
    ],
    cardDataSubs: [
        {
            id: 1001,
            Label: 'Deferidas',
            amout: '5',
            description: 'Solicitações Deferidas',
            icon: BadgeCheck,
        },
        {
            id: 1002,
            Label: 'Indeferidas',
            amout: '3',
            description: 'Solicitações Indeferidas',
            icon: SquareX,
        },
        {
            id: 1003,
            Label: 'Pendentes',
            amout: '4',
            description: 'Solicitações Pendentes',
            icon: CircleAlert,
        },
        {
            id: 1004,
            Label: 'Solicitadas',
            amout: '2',
            description: 'Solicitações de troca',
            icon: BellRing,
        },
    ],
    cardCadastro: [
        {
            id: 1001,
            Label: 'Cadastro Campus',
            link: '/dashboard/users/campus',
            icon: School,
        },
        {       
            id: 1002,
            Label: 'Cadastro Diretor',
            link: '/dashboard/users/diretor',
            icon: GraduationCap,
        },
        {
            id: 1003,
            Label: 'Cadastro Coordenador',
            link: '/dashboard/users/diretor',
            icon: Users,
        },
    ],
}