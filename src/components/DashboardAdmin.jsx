import React, { useState, useEffect } from 'react';

const Dashboard = ({ leads }) => {

  const [leadsClosed, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    
      // Função para buscar os leads
      const buscarLeads = async () => {
        try {
  
          const respostaLeads = await fetch(
              'https://script.google.com/macros/s/AKfycbzJ_WHn3ssPL8VYbVbVOUa1Zw0xVFLolCnL-rOQ63cHO2st7KHqzZ9CHUwZhiCqVgBu/exec?v=pegar_clientes_fechados'
            );
  
          const dadosLeads = await respostaLeads.json();
  
          console.log(dadosLeads)
  
          setLeads(dadosLeads);
        
        } catch (error) {
          console.error('Erro ao buscar leads:', error);
        } finally {
          setLoading(false);
        }
      };
  // Status gerais
  const totalLeads      = leads.length;
  const leadsFechados   = leads.filter(l => l.status === 'Fechado').length;
  const leadsPerdidos   = leads.filter(l => l.status === 'Perdido').length;
  const leadsEmContato  = leads.filter(l => l.status === 'Em Contato').length;
  const leadsSemContato = leads.filter(l => l.status === 'Sem Contato').length;

  // Novos contadores por seguradora após confirmação
  const portoSeguro = leadsClosed.filter(lead => lead.Seguradora === 'Porto Seguro').length;
  const azulSeguros = leadsClosed.filter(lead => lead.Seguradora === 'Azul Seguros').length;
  const itauSeguros = leadsClosed.filter(lead => lead.Seguradora === 'Itau Seguros').length;
  const demais = leadsClosed.filter(lead => lead.Seguradora === 'Demais Seguradoras').length;
  /*const demaisSeguradorasCount= leads.filter(l =>
    l.insurerConfirmed &&
    l.insurer !== 'Porto Seguro' &&
    l.insurer !== 'Azul Seguros' &&
    l.insurer !== 'Itau Seguros'
  ).length;*/

  // Estilo base das caixas
  const boxStyle = {
    padding: '10px',
    borderRadius: '5px',
    flex: 1,
    color: '#fff',
    textAlign: 'center'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>

      {/* Linha de status */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ ...boxStyle, backgroundColor: '#eee', color: '#333' }}>
          <h3>Total de Leads</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{totalLeads}</p>
        </div>
        <div style={{ ...boxStyle, backgroundColor: '#4CAF50' }}>
          <h3>Leads Fechados</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{leadsFechados}</p>
        </div>
        <div style={{ ...boxStyle, backgroundColor: '#F44336' }}>
          <h3>Leads Perdidos</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{leadsPerdidos}</p>
        </div>
        <div style={{ ...boxStyle, backgroundColor: '#FF9800' }}>
          <h3>Em Contato</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{leadsEmContato}</p>
        </div>
        <div style={{ ...boxStyle, backgroundColor: '#9E9E9E' }}>
          <h3>Sem Contato</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{leadsSemContato}</p>
        </div>
      </div>

      {/* Linha de seguradoras */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ ...boxStyle, backgroundColor: '#003366' }}>
          <h3>Porto Seguro</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{portoSeguroCount}</p>
        </div>
        <div style={{ ...boxStyle, backgroundColor: '#87CEFA' }}>
          <h3>Azul Seguros</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{azulSegurosCount}</p>
        </div>
        <div style={{ ...boxStyle, backgroundColor: '#FF8C00' }}>
          <h3>Itau Seguros</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{itauSegurosCount}</p>
        </div>
        <div style={{ ...boxStyle, backgroundColor: '#4CAF50' }}>
          <h3>Demais Seguradoras</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{demaisSeguradorasCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
