import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SymbiosisFacet, SymbiosisFacetInterface } from "../SymbiosisFacet";
declare type SymbiosisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SymbiosisFacet__factory extends ContractFactory {
    constructor(...args: SymbiosisFacetConstructorParams);
    deploy(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SymbiosisFacet>;
    getDeployTransaction(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SymbiosisFacet;
    connect(signer: Signer): SymbiosisFacet__factory;
    static readonly bytecode = "0x60c060405234801562000010575f80fd5b50604051620028a4380380620028a4833981016040819052620000339162000063565b6001600160a01b039182166080521660a052620000a0565b6001600160a01b038116811462000060575f80fd5b50565b5f806040838503121562000075575f80fd5b825162000082816200004b565b602084015190925062000095816200004b565b809150509250929050565b60805160a0516127e2620000c25f395f6105e601525f61061101526127e25ff3fe608060405260043610610028575f3560e01c80636e0671611461002c578063b70fb9a514610041575b5f80fd5b61003f61003a36600461211c565b610054565b005b61003f61004f3660046121d2565b610242565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447612232565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101418160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610178576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101b5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610206895f01518a60c001518a8a33610462565b60c08a015261021589876105a5565b5047905081811115610235576102355f846102308585612232565b6108a7565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102bd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6102cd3447612232565b9050846102f28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610329576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610366576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103a3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156103e1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561041f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043188608001518960c001516108dd565b61043b88886105a5565b504791505081811115610457576104575f846102308585612232565b50505f909155505050565b5f8280820361049d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856104ab600185612232565b8181106104ba576104ba61226a565b90506020028101906104cc9190612297565b6104dd9060808101906060016122d3565b90505f6104e982610a4f565b905073ffffffffffffffffffffffffffffffffffffffff8216610513576105103482612232565b90505b5f61051e8888610b05565b905061052a8888610c0f565b6105378a89898985610c7b565b5f8261054285610a4f565b61054c9190612232565b905089811015610597576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b5f6105c8836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f81156105dc575060c083015161060f565b61060f84608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151611025565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b11988260405180610120016040528087805f019061066791906122f3565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506020908101906106af908901896122f3565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506020016106f560a089018961235b565b808060200260200160405190810160405280939291908181526020018383602002808284375f9201919091525050509082525060200161073b6080890160608a016122d3565b73ffffffffffffffffffffffffffffffffffffffff16815260200161076660a0890160808a016122d3565b73ffffffffffffffffffffffffffffffffffffffff1681526020018860c00151815260200186151581526020018760c00160208101906107a691906122d3565b73ffffffffffffffffffffffffffffffffffffffff1681526020016107ce60e08901896122f3565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815261083c919060040161247a565b5f604051808303818588803b158015610853575f80fd5b505af1158015610865573d5f803e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161089991906125ac565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316156108d3576108ce83838361115a565b505050565b6108ce82826112d9565b805f03610916576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661096f578034101561096b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109d9573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109fd91906126be565b905081811015610a43576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161058e565b6108ce833330856113ff565b5f73ffffffffffffffffffffffffffffffffffffffff821615610afd576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ad4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610af891906126be565b610aff565b475b92915050565b6060815f8167ffffffffffffffff811115610b2257610b22611ee3565b604051908082528060200260200182016040528015610b4b578160200160208202803683370190505b5090505f805b83811015610c0457868682818110610b6b57610b6b61226a565b9050602002810190610b7d9190612297565b610b8e9060808101906060016122d3565b9150610b9982610a4f565b838281518110610bab57610bab61226a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bfc5734838281518110610be457610be461226a565b60200260200101818151610bf89190612232565b9052505b600101610b51565b509095945050505050565b5f5b818110156108ce5736838383818110610c2c57610c2c61226a565b9050602002810190610c3e9190612297565b9050610c5060e0820160c083016126d5565b15610c7257610c72610c6860608301604084016122d3565b82608001356108dd565b50600101610c11565b838383838260018114610f41575f8585610c96600185612232565b818110610ca557610ca561226a565b9050602002810190610cb79190612297565b610cc89060808101906060016122d3565b90505f89815b81811015610e6f57368d8d83818110610ce957610ce961226a565b9050602002810190610cfb9190612297565b9050610d2a610d1060608301604084016122d3565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d8c5750610d8c610d4360408301602084016122d3565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610da35750610da3610d4360208301836122d3565b8015610e265750610e26610dba60a08301836122f3565b610dc8916004915f916126f0565b610dd191612717565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e5c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e668f82611614565b50600101610cce565b50505f5b610e7e600185612232565b811015610f39575f888883818110610e9857610e9861226a565b9050602002810190610eaa9190612297565b610ebb9060808101906060016122d3565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f3057858281518110610f0257610f0261226a565b6020026020010151610f1382610a4f565b610f1d9190612232565b92508215610f3057610f308188856108a7565b50600101610e73565b505050611019565b875f5b8181101561101657368b8b83818110610f5f57610f5f61226a565b9050602002810190610f719190612297565b9050610f86610d1060608301604084016122d3565b80610f9f5750610f9f610d4360408301602084016122d3565b8015610fb65750610fb6610d4360208301836122d3565b8015610fcd5750610fcd610dba60a08301836122f3565b611003576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61100d8d82611614565b50600101610f44565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661104557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611092576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611105573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061112991906126be565b10156108ce576108ce83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118e7565b73ffffffffffffffffffffffffffffffffffffffff83166111a7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111f4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561125e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061128291906126be565b9050808211156112c8576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161058e565b6112d3848484611a54565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611326576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611369576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161058e565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146113bf576040519150601f19603f3d011682016040523d82523d5f602084013e6113c4565b606091505b50509050806108ce576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661144c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611499576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015611507573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061152b91906126be565b905061153982868686611aaa565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156115a7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115cb91906126be565b6115d59190612232565b1461160c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61162a61162460208301836122d3565b3b151590565b611660576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361169f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6116b3610d1060608501604086016122d3565b6116bd575f6116c3565b82608001355b90505f6116de6116d960608601604087016122d3565b610a4f565b90505f6116f46116d960808701606088016122d3565b9050825f0361172a5761172a61171060608701604088016122d3565b61172060408801602089016122d3565b8760800135611025565b8460800135821015611775576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161058e565b5f8061178460208801886122d3565b73ffffffffffffffffffffffffffffffffffffffff16856117a860a08a018a6122f3565b6040516117b692919061275f565b5f6040518083038185875af1925050503d805f81146117f0576040519150601f19603f3d011682016040523d82523d5f602084013e6117f5565b606091505b5091509150816118085761180881611b08565b5f61181c6116d960808a0160608b016122d3565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961184d60208b018b6122d3565b61185d60608c0160408d016122d3565b61186d60808d0160608e016122d3565b8c6080013589871161187f5786611889565b6118898a88612232565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526119738482611b12565b6112d35760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611a4a9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bcd565b6112d38482611bcd565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108ce9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016119c8565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112d39085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016119c8565b8051602082018181fd5b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611b3a919061276e565b5f604051808303815f865af19150503d805f8114611b73576040519150601f19603f3d011682016040523d82523d5f602084013e611b78565b606091505b5091509150818015611ba2575080511580611ba2575080806020019051810190611ba2919061277f565b8015611bc4575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b5f611c2e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cda9092919063ffffffff16565b905080515f1480611c4e575080806020019051810190611c4e919061277f565b6108ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161058e565b6060611ce884845f85611cf0565b949350505050565b606082471015611d82576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161058e565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611daa919061276e565b5f6040518083038185875af1925050503d805f8114611de4576040519150601f19603f3d011682016040523d82523d5f602084013e611de9565b606091505b5091509150611dfa87838387611e05565b979650505050505050565b60608315611e9a5782515f03611e935773ffffffffffffffffffffffffffffffffffffffff85163b611e93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161058e565b5081611ce8565b611ce88383815115611eaf5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058e919061279a565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611f3457611f34611ee3565b60405290565b5f82601f830112611f49575f80fd5b813567ffffffffffffffff80821115611f6457611f64611ee3565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611faa57611faa611ee3565b81604052838152866020858801011115611fc2575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612004575f80fd5b919050565b8015158114612016575f80fd5b50565b803561200481612009565b5f6101408284031215612035575f80fd5b61203d611f10565b905081358152602082013567ffffffffffffffff8082111561205d575f80fd5b61206985838601611f3a565b60208401526040840135915080821115612081575f80fd5b5061208e84828501611f3a565b6040830152506120a060608301611fe1565b60608201526120b160808301611fe1565b60808201526120c260a08301611fe1565b60a082015260c082013560c082015260e082013560e08201526101006120e9818401612019565b908201526101206120fb838201612019565b9082015292915050565b5f6101008284031215612116575f80fd5b50919050565b5f805f806060858703121561212f575f80fd5b843567ffffffffffffffff80821115612146575f80fd5b61215288838901612024565b95506020870135915080821115612167575f80fd5b818701915087601f83011261217a575f80fd5b813581811115612188575f80fd5b8860208260051b850101111561219c575f80fd5b6020830195508094505060408701359150808211156121b9575f80fd5b506121c687828801612105565b91505092959194509250565b5f80604083850312156121e3575f80fd5b823567ffffffffffffffff808211156121fa575f80fd5b61220686838701612024565b9350602085013591508082111561221b575f80fd5b5061222885828601612105565b9150509250929050565b81810381811115610aff577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122c9575f80fd5b9190910192915050565b5f602082840312156122e3575f80fd5b6122ec82611fe1565b9392505050565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612326575f80fd5b83018035915067ffffffffffffffff821115612340575f80fd5b602001915036819003821315612354575f80fd5b9250929050565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261238e575f80fd5b83018035915067ffffffffffffffff8211156123a8575f80fd5b6020019150600581901b3603821315612354575f80fd5b5f5b838110156123d95781810151838201526020016123c1565b50505f910152565b5f81518084526123f88160208601602086016123bf565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b5f815180845260208085019450602084015f5b8381101561246f57815173ffffffffffffffffffffffffffffffffffffffff168752958201959082019060010161243d565b509495945050505050565b602081525f82516101208060208501526124986101408501836123e1565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0808685030160408701526124d484836123e1565b935060408701519150808685030160608701526124f1848361242a565b93506060870151915061251c608087018373ffffffffffffffffffffffffffffffffffffffff169052565b608087015173ffffffffffffffffffffffffffffffffffffffff811660a0880152915060a087015160c087015260c0870151915061255e60e087018315159052565b60e087015191506101006125898188018473ffffffffffffffffffffffffffffffffffffffff169052565b8701518685039091018387015290506125a283826123e1565b9695505050505050565b60208152815160208201525f60208301516101408060408501526125d46101608501836123e1565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261260f83826123e1565b9250506060850151612639608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126ac8187018315159052565b90950151151593019290925250919050565b5f602082840312156126ce575f80fd5b5051919050565b5f602082840312156126e5575f80fd5b81356122ec81612009565b5f80858511156126fe575f80fd5b8386111561270a575f80fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127575780818660040360031b1b83161692505b505092915050565b818382375f9101908152919050565b5f82516122c98184602087016123bf565b5f6020828403121561278f575f80fd5b81516122ec81612009565b602081525f6122ec60208301846123e156fea2646970667358221220dfd0705bbae65057461f49356fd3457630a16dea433330e7adaf232b6cf32c4364736f6c63430008160033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_symbiosisMetaRouter";
            readonly type: "address";
            readonly internalType: "contract ISymbiosisMetaRouter";
        }, {
            readonly name: "_symbiosisGateway";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaSymbiosis";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "intermediateToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaSymbiosis";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "intermediateToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): SymbiosisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SymbiosisFacet;
}
export {};
