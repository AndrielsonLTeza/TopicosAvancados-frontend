import React, { useState } from 'react';
import { FaSeedling, FaHome, FaTractor, FaBug, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

import { cadastrarPropriedade } from '../services/api.js';
import { cadastrarCultura } from '../services/api.js';
import { cadastrarTipoPraga } from '../services/api.js';
import { cadastrarTipoDoenca } from '../services/api.js';

const CadastroPage = () => {

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormDataProp(prev => ({
        ...prev,
        [name]: value
      }));
       setFormDataCult(prev => ({
        ...prev,
        [name]: value
      }));
       setFormDataPraga(prev => ({
        ...prev,
        [name]: value
      }));
       setFormDataDoen(prev => ({
        ...prev,
        [name]: value
      }));
    };

  const [formDataProp, setFormDataProp] = useState({
      nome: '',
      tamanhoHa: '',
      responsavel: '',
    });

  const handleSubmitProp = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    // setError('');

    try {
      console.log("cadastrando propriedade...");
      console.log("nome:", formDataProp.nome);
      console.log("tamanho:", formDataProp.tamanhoHa);
      console.log("responsavel:", formDataProp.responsavel);

      const tamanhoHaInt = parseInt(formDataProp.tamanhoHa, 10);

      if (isNaN(tamanhoHaInt)) {
        alert("Tamanho da propriedade deve ser um número válido.");
        return;
      }

      const response = await cadastrarPropriedade({
              nome: formDataProp.nome,
              tamanhoHa: tamanhoHaInt,
              responsavel: formDataProp.responsavel
            });

      console.log(response);
      
    } catch (error) {
      console.log(error);
    } finally {
     
    }
  };

 const [formDataDoenca, setFormDataDoen] = useState({
      nomeDoenca: '',
      sintomasDoenca: '',
      culturasAfetadasDoenca: '',
      tratamentosDoenca: '',
    });

  const handleSubmitDoencas = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    // setError('');

    try {
      console.log("cadastrando Doença..");
      console.log("nome:", formDataDoenca.nomeDoenca);
      console.log("sintomas:", formDataDoenca.sintomasDoenca);
      console.log("culturasAfetadas:", formDataDoenca.culturasAfetadasDoenca);
      console.log("tratamentos:", formDataDoenca.tratamentosDoenca);

      const culturasAfetadasString = formDataDoenca.culturasAfetadasDoenca;
      const culturasAfetadasArrayDeString = culturasAfetadasString.split(',').map(item => item.trim());
      const culturasAfetadasInteiros = culturasAfetadasArrayDeString.map(Number);

      const response = await cadastrarTipoDoenca({
              nome: formDataDoenca.nomeDoenca,
              sintomas: formDataDoenca.sintomasDoenca,
              culturasAfetadas: culturasAfetadasInteiros,
              tratamentos: formDataDoenca.tratamentosDoenca
            });

      console.log(response);
      
    } catch (error) {
      console.log(error);
    } finally {
     
    }
  };


  const [formDataPraga, setFormDataPraga] = useState({
      nomePraga: '',
      nomeCientificoPraga: '',
      culturasAfetadas: '',
      descricaoPraga: '',
    });
  const handleSubmitPragas = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    // setError('');

    try {
      console.log("cadastrando Praga...");
      console.log("nome:", formDataPraga.nomePraga);
      console.log("nomeCientifico:", formDataPraga.nomeCientificoPraga);
      console.log("culturas afetadas:", formDataPraga.culturasAfetadas);
      console.log("descricao:", formDataPraga.descricaoPraga);

    // --- Transformação da string em lista de inteiros ---
      const culturasAfetadasString = formDataPraga.culturasAfetadas;
      const culturasAfetadasArrayDeString = culturasAfetadasString.split(',').map(item => item.trim());
      const culturasAfetadasInteiros = culturasAfetadasArrayDeString.map(Number);

      const response = await cadastrarTipoPraga({
            nome: formDataProp.nomePraga,
            nomeCientifico: formDataProp.nomeCientificoPraga,
            descricao: formDataProp.descricaoPraga,
            culturasAfetadas: culturasAfetadasInteiros
          });

      console.log(response);
      
    } catch (error) {
      console.log(error);
    } finally {
     
    }
  };


  const [formDataCultura, setFormDataCult] = useState({
      nomeCultura: '',
      tempoCultivoDias: '',
      epocaPlantio: '',
    });
  const handleSubmitCultura = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    // setError('');

    try{

      console.log("cadastrando Cultura...");
      console.log("nome:", formDataCultura.nomeCultura);
      console.log("tempoCultivoDias:", formDataCultura.tempoCultivoDias);
      console.log("epocaPlantio:", formDataCultura.epocaPlantio);

      const tempoCultivoDias = parseInt(formDataCultura.tempoCultivoDias, 10);

      if (isNaN(tempoCultivoDias)) {
        alert("Tamanho do tempo de cultivo deve ser um número válido.");
        return;
      }

      const response = await cadastrarCultura({
              nome: formDataCultura.nomeCultura,
              tempoCultivoDias: formDataCultura.tempoCultivoDias,
              epocaPlantio: formDataCultura.epocaPlantio
            });

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
     
    }
  };



  return (
    <div className="flex min-h-screen bg-[#f5f8f2] text-gray-800">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r shadow-md p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-2">
          <FaSeedling /> AgroSistema
        </h2>
        <nav className="space-y-3">
          <Link
            to="/cadastro"
            className="flex items-center gap-2 text-green-700 hover:font-semibold">
            <FaHome /> Cadastro
          </Link>
          <Link
            to="/monitoramento"
            className="flex items-center gap-2 text-green-700 hover:font-semibold"
          >
            <FaTractor /> Monitoramento
          </Link>
          <Link
            to="/ocorrencias"
            className="flex items-center gap-2 text-green-700 hover:font-semibold"
          >
            <FaBug /> Ocorrências
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-10 text-green-900">Cadastro</h1>

        <div className="space-y-10">

          {/* Card - Propriedade */}
          <section className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cadastrar Propriedade</h2>
            <form onSubmit={handleSubmitProp}>
              <div className="flex gap-4 flex-wrap">
                <input
                  type="text"
                  name="nome"
                  value={formDataProp.nome}
                  onChange={handleInputChange}
                  required
                  placeholder="Nome da propriedade"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="number"
                  name="tamanhoHa"
                  value={formDataProp.tamanhoHa}
                  onChange={handleInputChange}
                  required
                  placeholder="Tamanho da propriedade"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  name="responsavel"
                  value={formDataProp.responsavel}
                  onChange={handleInputChange}
                  required
                  placeholder="Responsavel da propriedade"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <button 
                  type="submit"
                  className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                  <FaCheck /> Salvar
                </button>
              </div>
            </form>
          </section>

          {/* Card - Cultura */}
          <section className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cadastrar Cultura</h2>
            <form onSubmit={handleSubmitCultura}>
              <div className="flex gap-4 flex-wrap">
                <input
                  type="text"
                  name="nomeCultura"
                  value={formDataCultura.nomeCultura}
                  onChange={handleInputChange}
                  placeholder="Nome da cultura"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  name="tempoCultivoDias"
                  value={formDataCultura.tempoCultivoDias}
                  onChange={handleInputChange}
                  placeholder="Tempo de Cultivo em Dias"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  name="epocaPlantio"
                  value={formDataCultura.epocaPlantio}
                  onChange={handleInputChange}
                  placeholder="Epoca do plantio"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <button 
                  type="submit"
                  className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                  <FaCheck /> Salvar
                </button>
              </div>
            </form>
          </section>

          {/* Card - Problema */}
          <section className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cadastrar Tipo de Praga </h2>
            <form onSubmit={handleSubmitPragas}>
              <div className="flex gap-4 flex-wrap">
                <input
                  type="text"
                  name="nomePraga"
                  value={formDataPraga.nomePraga}
                  onChange={handleInputChange}
                  placeholder="Nome da praga"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  name="nomeCientificoPraga"
                  value={formDataPraga.nomeCientificoPraga}
                  onChange={handleInputChange}
                  placeholder="Nome cientifico da praga"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  name="culturasAfetadas"
                  value={formDataPraga.culturasAfetadas}
                  onChange={handleInputChange}
                  placeholder="Culturas afetadas"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  name="descricaoPraga"
                  value={formDataPraga.descricaoPraga}
                  onChange={handleInputChange}
                  placeholder="Descrição"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <button 
                  type="submit"
                  className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                  <FaCheck /> Salvar
                </button>
              </div>
            </form>
            
          </section>

           <section className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cadastrar Tipo de Doença </h2>
            <form onSubmit={handleSubmitDoencas}>
              <div className="flex gap-4 flex-wrap">
                <input
                  type="text"
                  name="nomeDoenca"
                  value={formDataDoenca.nomeDoenca}
                  onChange={handleInputChange}
                  placeholder="Nome da doença"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  name="sintomasDoenca"
                  value={formDataDoenca.sintomasDoenca}
                  onChange={handleInputChange}
                  placeholder="Sintoma da doença"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  name="culturasAfetadasDoenca"
                  value={formDataDoenca.culturasAfetadasDoenca}
                  onChange={handleInputChange}
                  placeholder="Culturas afetadas"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  name="tratamentosDoenca"
                  value={formDataDoenca.tratamentosDoenca}
                  onChange={handleInputChange}
                  placeholder="Tratamentos"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <button 
                  type="submit"
                  className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
                  <FaCheck /> Salvar
                </button>
              </div>
            </form>
          </section>

        </div>
      </main>
    </div>
  );
}


export default CadastroPage;