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
    static readonly bytecode = "0x60c0604052348015600e575f5ffd5b506040516128dc3803806128dc833981016040819052602b916057565b6001600160a01b039182166080521660a052608a565b6001600160a01b03811681146054575f5ffd5b50565b5f5f604083850312156067575f5ffd5b82516070816041565b6020840151909250607f816041565b809150509250929050565b60805160a0516128316100ab5f395f6105e601525f61061101526128315ff3fe608060405260043610610028575f3560e01c80636e0671611461002c578063b70fb9a514610041575b5f5ffd5b61003f61003a366004612126565b610054565b005b61003f61004f3660046121ec565b610242565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447612251565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101418160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610178576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101b5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610206895f01518a60c001518a8a33610462565b60c08a015261021589876105a5565b5047905081811115610235576102355f846102308585612251565b6108a7565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102bd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6102cd3447612251565b9050846102f28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610329576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610366576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103a3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156103e1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561041f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043188608001518960c001516108dd565b61043b88886105a5565b504791505081811115610457576104575f846102308585612251565b50505f909155505050565b5f8280820361049d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856104ab600185612251565b8181106104ba576104ba612289565b90506020028101906104cc91906122b6565b6104dd9060808101906060016122f2565b90505f6104e982610a4f565b905073ffffffffffffffffffffffffffffffffffffffff8216610513576105103482612251565b90505b5f61051e8888610b05565b905061052a8888610c0f565b6105378a89898985610c7b565b5f8261054285610a4f565b61054c9190612251565b905089811015610597576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b5f6105c8836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f81156105dc575060c083015161060f565b61060f84608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151611026565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b11988260405180610120016040528087805f01906106679190612312565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506020908101906106af90890189612312565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506020016106f560a089018961237a565b808060200260200160405190810160405280939291908181526020018383602002808284375f9201919091525050509082525060200161073b6080890160608a016122f2565b73ffffffffffffffffffffffffffffffffffffffff16815260200161076660a0890160808a016122f2565b73ffffffffffffffffffffffffffffffffffffffff1681526020018860c00151815260200186151581526020018760c00160208101906107a691906122f2565b73ffffffffffffffffffffffffffffffffffffffff1681526020016107ce60e0890189612312565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815261083c919060040161247a565b5f604051808303818588803b158015610853575f5ffd5b505af1158015610865573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161089991906125d7565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316156108d3576108ce83838361115b565b505050565b6108ce82826112da565b805f03610916576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661096f578034101561096b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109d9573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109fd91906126ea565b905081811015610a43576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161058e565b6108ce83333085611400565b5f73ffffffffffffffffffffffffffffffffffffffff821615610afd576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ad4573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610af891906126ea565b610aff565b475b92915050565b6060815f8167ffffffffffffffff811115610b2257610b22611ee4565b604051908082528060200260200182016040528015610b4b578160200160208202803683370190505b5090505f805b83811015610c0457868682818110610b6b57610b6b612289565b9050602002810190610b7d91906122b6565b610b8e9060808101906060016122f2565b9150610b9982610a4f565b838281518110610bab57610bab612289565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bfc5734838281518110610be457610be4612289565b60200260200101818151610bf89190612251565b9052505b600101610b51565b509095945050505050565b5f5b818110156108ce5736838383818110610c2c57610c2c612289565b9050602002810190610c3e91906122b6565b9050610c5060e0820160c08301612701565b15610c7257610c72610c6860608301604084016122f2565b82608001356108dd565b50600101610c11565b838383838260018114610f42575f8585610c96600185612251565b818110610ca557610ca5612289565b9050602002810190610cb791906122b6565b610cc89060808101906060016122f2565b90505f89815b81811015610e6f57368d8d83818110610ce957610ce9612289565b9050602002810190610cfb91906122b6565b9050610d2a610d1060608301604084016122f2565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d8c5750610d8c610d4360408301602084016122f2565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610da35750610da3610d4360208301836122f2565b8015610e265750610e26610dba60a0830183612312565b610dc8916004915f9161271c565b610dd191612743565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e5c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e668f82611615565b50600101610cce565b505f90505b610e7f600185612251565b811015610f3a575f888883818110610e9957610e99612289565b9050602002810190610eab91906122b6565b610ebc9060808101906060016122f2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f3157858281518110610f0357610f03612289565b6020026020010151610f1482610a4f565b610f1e9190612251565b92508215610f3157610f318188856108a7565b50600101610e74565b50505061101a565b875f5b8181101561101757368b8b83818110610f6057610f60612289565b9050602002810190610f7291906122b6565b9050610f87610d1060608301604084016122f2565b80610fa05750610fa0610d4360408301602084016122f2565b8015610fb75750610fb7610d4360208301836122f2565b8015610fce5750610fce610dba60a0830183612312565b611004576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61100e8d82611615565b50600101610f45565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661104657505050565b73ffffffffffffffffffffffffffffffffffffffff8216611093576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611106573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061112a91906126ea565b10156108ce576108ce83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118e8565b73ffffffffffffffffffffffffffffffffffffffff83166111a8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111f5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561125f573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061128391906126ea565b9050808211156112c9576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161058e565b6112d4848484611a55565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611327576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561136a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161058e565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146113c0576040519150601f19603f3d011682016040523d82523d5f602084013e6113c5565b606091505b50509050806108ce576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661144d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661149a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015611508573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061152c91906126ea565b905061153a82868686611aab565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156115a8573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115cc91906126ea565b6115d69190612251565b1461160d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61162b61162560208301836122f2565b3b151590565b611661576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036116a0576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6116b4610d1060608501604086016122f2565b6116be575f6116c4565b82608001355b90505f6116df6116da60608601604087016122f2565b610a4f565b90505f6116f56116da60808701606088016122f2565b9050825f0361172b5761172b61171160608701604088016122f2565b61172160408801602089016122f2565b8760800135611026565b8460800135821015611776576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161058e565b5f8061178560208801886122f2565b73ffffffffffffffffffffffffffffffffffffffff16856117a960a08a018a612312565b6040516117b79291906127a9565b5f6040518083038185875af1925050503d805f81146117f1576040519150601f19603f3d011682016040523d82523d5f602084013e6117f6565b606091505b5091509150816118095761180981611b09565b5f61181d6116da60808a0160608b016122f2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961184e60208b018b6122f2565b61185e60608c0160408d016122f2565b61186e60808d0160608e016122f2565b8c60800135898711611880578661188a565b61188a8a88612251565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526119748482611b13565b6112d45760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611a4b9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bce565b6112d48482611bce565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108ce9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016119c9565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112d49085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016119c9565b8051602082018181fd5b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff1684604051611b3b91906127b8565b5f604051808303815f865af19150503d805f8114611b74576040519150601f19603f3d011682016040523d82523d5f602084013e611b79565b606091505b5091509150818015611ba3575080511580611ba3575080806020019051810190611ba391906127ce565b8015611bc5575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b5f611c2f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cdb9092919063ffffffff16565b905080515f1480611c4f575080806020019051810190611c4f91906127ce565b6108ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161058e565b6060611ce984845f85611cf1565b949350505050565b606082471015611d83576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161058e565b5f5f8673ffffffffffffffffffffffffffffffffffffffff168587604051611dab91906127b8565b5f6040518083038185875af1925050503d805f8114611de5576040519150601f19603f3d011682016040523d82523d5f602084013e611dea565b606091505b5091509150611dfb87838387611e06565b979650505050505050565b60608315611e9b5782515f03611e945773ffffffffffffffffffffffffffffffffffffffff85163b611e94576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161058e565b5081611ce9565b611ce98383815115611eb05781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058e91906127e9565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611f3557611f35611ee4565b60405290565b5f82601f830112611f4a575f5ffd5b813567ffffffffffffffff811115611f6457611f64611ee4565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611fb157611fb1611ee4565b604052818152838201602001851015611fc8575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612007575f5ffd5b919050565b8015158114612019575f5ffd5b50565b80356120078161200c565b5f6101408284031215612038575f5ffd5b612040611f11565b823581529050602082013567ffffffffffffffff81111561205f575f5ffd5b61206b84828501611f3b565b602083015250604082013567ffffffffffffffff81111561208a575f5ffd5b61209684828501611f3b565b6040830152506120a860608301611fe4565b60608201526120b960808301611fe4565b60808201526120ca60a08301611fe4565b60a082015260c0828101359082015260e080830135908201526120f0610100830161201c565b610100820152612103610120830161201c565b61012082015292915050565b5f6101008284031215612120575f5ffd5b50919050565b5f5f5f5f60608587031215612139575f5ffd5b843567ffffffffffffffff81111561214f575f5ffd5b61215b87828801612027565b945050602085013567ffffffffffffffff811115612177575f5ffd5b8501601f81018713612187575f5ffd5b803567ffffffffffffffff81111561219d575f5ffd5b8760208260051b84010111156121b1575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156121d4575f5ffd5b6121e08782880161210f565b91505092959194509250565b5f5f604083850312156121fd575f5ffd5b823567ffffffffffffffff811115612213575f5ffd5b61221f85828601612027565b925050602083013567ffffffffffffffff81111561223b575f5ffd5b6122478582860161210f565b9150509250929050565b81810381811115610aff577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122e8575f5ffd5b9190910192915050565b5f60208284031215612302575f5ffd5b61230b82611fe4565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612345575f5ffd5b83018035915067ffffffffffffffff82111561235f575f5ffd5b602001915036819003821315612373575f5ffd5b9250929050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123ad575f5ffd5b83018035915067ffffffffffffffff8211156123c7575f5ffd5b6020019150600581901b3603821315612373575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f8151808452602084019350602083015f5b8281101561247057815173ffffffffffffffffffffffffffffffffffffffff1686526020958601959091019060010161243c565b5093949350505050565b602081525f825161012060208401526124976101408401826123de565b905060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160408501526124d282826123de565b91505060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261250e828261242a565b9150506060840151612538608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015160c084015260c084015161257860e085018215159052565b5060e084015173ffffffffffffffffffffffffffffffffffffffff8116610100850152506101008401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301610120850152611bc582826123de565b60208152815160208201525f602083015161014060408401526125fe6101608401826123de565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261263982826123de565b9150506060840151612663608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516126d261012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156126fa575f5ffd5b5051919050565b5f60208284031215612711575f5ffd5b813561230b8161200c565b5f5f8585111561272a575f5ffd5b83861115612736575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156127a2577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f82518060208501845e5f920191825250919050565b5f602082840312156127de575f5ffd5b815161230b8161200c565b602081525f61230b60208301846123de56fea2646970667358221220e20753478a0cbc5e2f3029205a246834a470b2ba8acbd41c06fc626751ece28264736f6c634300081d0033";
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
