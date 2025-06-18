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
      nome: '',
      sintomas: '',
      culturasAfetadas: '',
      tratamentos: '',
    });

  const handleSubmitDoencas = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      console.log("cadastrando Doença..");
      console.log("nome:", formDataDoenca.nome);
      console.log("sintomas:", formDataDoenca.sintomas);
      console.log("culturasAfetadas:", formDataDoenca.culturasAfetadas);
      console.log("tratamentos:", formDataDoenca.tratamentos);

      const culturasAfetadas = parseInt(formDataDoenca.culturasAfetadas, 10);

      if (isNaN(culturasAfetadas)) {
        alert("As culturas afetadas tem que tem um numero valido .");
        return;
      }

      const response = await cadastrarTipoDoenca({
              nome: formDataDoenca.nome,
              sintomas: formDataDoenca.sintomas,
              culturasAfetadas: formDataDoenca.culturasAfetadas,
              tratamentos: formDataDoenca.tratamentos
            });

      console.log(response);
      
    } catch (error) {
      console.log(error);
    } finally {
     
    }
  };


  const [formDataPraga, setFormDataPraga] = useState({
      nome: '',
      nomeCientifico: '',
      descricao: '',
    });
  const handleSubmitPragas = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      console.log("cadastrando Praga...");
      console.log("nome:", formDataPraga.nome);
      console.log("nomeCientifico:", formDataPraga.nomeCientifico);
      console.log("descricao:", formDataPraga.descricao);

        const response = await cadastrarTipoPraga({
              nome: formDataProp.nome,
              nomeCientifico: formDataProp.nomeCientifico,
              descricao: formDataProp.descricao
            });

      console.log(response);
      
    } catch (error) {
      console.log(error);
    } finally {
     
    }
  };


  const [formDataCultura, setFormDataCult] = useState({
      nome: '',
      tempoCultivoDias: '',
      epocaPlantio: '',
    });
  const handleSubmitCultura = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try{

      console.log("cadastrando Cultura...");
      console.log("nome:", formDataCultura.nome);
      console.log("tempoCultivoDias:", formDataCultura.tempoCultivoDias);
      console.log("epocaPlantio:", formDataCultura.epocaPlantio);

      const tempoCultivoDias = parseInt(formDataCultura.tempoCultivoDias, 10);

      if (isNaN(tempoCultivoDias)) {
        alert("Tamanho do tempo de cultivo deve ser um número válido.");
        return;
      }

      const epocaPlantio = parseInt(formDataCultura.epocaPlantio, 10);

      if (isNaN(epocaPlantio)) {
        alert("O tempo de epoca de plantio deve ser um número válido.");
        return;
      }

      const response = await cadastrarCultura({
              nome: formDataCultura.nome,
              nomeCientifico: formDataCultura.nomeCientifico,
              descricao: formDataCultura.descricao
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
            to="/Monitoramento"
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
                  placeholder="Nome da cultura"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  placeholder="Tempo de Cultivo em Dias"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
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
                  placeholder="Nome da praga"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  placeholder="Nome cientifico da praga"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  placeholder="Culturas afetadas"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
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
                  placeholder="Nome da doença"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  placeholder="Sintoma da doença"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
                  placeholder="Culturas afetadas"
                  className="border border-gray-300 rounded px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <input
                  type="text"
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