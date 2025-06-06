import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Search, Trophy, UserPlus, UserCircle } from 'lucide-react';

const Sidebar = ({ nomeUsuario }) => {
  const isAdmin = nomeUsuario === 'Administrador 1';

  return (
    <div className="w-64 bg-white shadow-xl border-r border-gray-200 h-full p-6">
      <h2 className="text-xl font-semibold mb-8">
        Olá, {nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1)}
      </h2>

      <nav className="flex flex-col gap-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${
              isActive ? 'border-l-4 border-blue-500 bg-blue-50' : ''
            }`
          }
        >
          <Home size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/leads"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${
              isActive ? 'border-l-4 border-blue-500 bg-blue-50' : ''
            }`
          }
        >
          <Users size={20} />
          Leads
        </NavLink>

        <NavLink
          to="/leads-fechados"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${
              isActive ? 'border-l-4 border-blue-500 bg-blue-50' : ''
            }`
          }
        >
          <Users size={20} />
          Leads Fechados
        </NavLink>

        <NavLink
          to="/leads-perdidos"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${
              isActive ? 'border-l-4 border-blue-500 bg-blue-50' : ''
            }`
          }
        >
          <Users size={20} />
          Leads Perdidos
        </NavLink>

        <NavLink
          to="/buscar-lead"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${
              isActive ? 'border-l-4 border-blue-500 bg-blue-50' : ''
            }`
          }
        >
          <Search size={20} />
          Buscar Lead
        </NavLink>

        <NavLink
          to="/ranking"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${
              isActive ? 'border-l-4 border-blue-500 bg-blue-50' : ''
            }`
          }
        >
          <Trophy size={20} />
          Ranking
        </NavLink>

        {isAdmin && (
          <>
            <NavLink
              to="/criar-usuario"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${
                  isActive ? 'border-l-4 border-blue-500 bg-blue-50' : ''
                }`
              }
            >
              <UserPlus size={20} />
              Criar Usuário
            </NavLink>

            <NavLink
              to="/usuarios"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${
                  isActive ? 'border-l-4 border-blue-500 bg-blue-50' : ''
                }`
              }
            >
              <UserCircle size={20} />
              Usuários
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
