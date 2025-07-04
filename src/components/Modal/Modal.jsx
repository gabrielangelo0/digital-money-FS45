"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

export default function Modal({ open, setOpen }) {

  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h1 className="text-2xl font-bold text-gray-900 mb-5">
                      Cadastrar transação
                    </h1>
                    <div className="mt-2 w-full space-y-5">
                      <input
                        className="w-full h-[50px] bg-gray-200 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Titulo"
                      />
                      <input
                        className="w-full h-[50px] bg-gray-200 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Preço"
                      />
                      <div className="flex justify-between">
                        <button
                          className="px-4 py-2 cursor-pointer w-[49%] h-[50px] flex gap-4 items-center justify-center transition ease-in-out duration-150 bg-emerald-100 hover:bg-emerald-200}"
                        >
                          <ArrowCircleUp
                            size={20}
                            className="text-emerald-500 font-bold"
                          />
                          Entrada
                        </button>

                        <button
                          className="px-4 py-2 cursor-pointer w-[49%] h-[50px] flex gap-4 items-center justify-center transition ease-in-out duration-150 bg-red-100 hover:bg-red-200"
                        >
                          <ArrowCircleDown
                            size={20}
                            className="text-red-500 font-bold"
                          />{" "}
                          Saida
                        </button>
                      </div>
                      <div className="w-full">
                        <input
                          className="w-full h-[50px] bg-gray-200 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                          placeholder="Categoria"
                        />
                      </div>
                    </div>
                    <div className="bg-white w-full flex items-center justify-center sm:flex sm:flex-row-reverse mt-5">
                      <button
                        type="button"
                        className="w-full h-[50px] items-center justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 cursor-pointer"
                      >
                        Cadastrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
