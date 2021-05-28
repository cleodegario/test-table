export class LaudoDTO {
    id: number = 0;
    medidorId: number = 0;    
    padraoId?: number;
    numeroLaudo?: string;
    dataLaudo?: string;
    CN?: string;
    CP?: string;
    CI?: string;
    erroPermitido?: string;
    registrador?: boolean;
    marchaEmVazio?: boolean;
    presencaCliente?: boolean;
    observacao?: string;
    codVerificadorAutenticidade?: string;
    statusTransmissao?: boolean;
    dataTransmissao?: string;
    nomeRepresentanteCliente?: string;
    CPFRepresentanteCliente?: string;
    status?: string;
    certificado?: string;
    usuarioInclusaoId?: number;
    usuarioAlteracaoId?: number;
    createdAt?: string;
    updatedAt?: string;
}