import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipFacet, GasZipFacetInterface } from "../GasZipFacet";
declare type GasZipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipFacet__factory extends ContractFactory {
    constructor(...args: GasZipFacetConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipFacet>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipFacet;
    connect(signer: Signer): GasZipFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200278f3803806200278f83398101604081905262000034916200006e565b6001600160a01b0381166200005c576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052620000a0565b6000602082840312156200008157600080fd5b81516001600160a01b03811681146200009957600080fd5b9392505050565b6080516126cd620000c260003960008181607101526107e601526126cd6000f3fe60806040526004361061005a5760003560e01c8063606326ff11610043578063606326ff146100eb578063b49d391d14610100578063fc5f10031461012857600080fd5b8063194c869f1461005f57806346fd98e2146100bd575b600080fd5b34801561006b57600080fd5b506100937f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100c957600080fd5b506100dd6100d8366004611f3a565b61013b565b6040519081526020016100b4565b6100fe6100f93660046121c2565b6101cf565b005b34801561010c57600080fd5b506100937311f111f111f111f111f111f111f111f111f111f181565b6100fe61013636600461223e565b6103bd565b6000816020811115610179576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156101c7578484828181106101965761019661228d565b90506020020160208101906101ab91906122bc565b60ff16600884901b179250806101c090612315565b905061017c565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161024a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061025b344761234d565b90508680610100015161029a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156102d8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61033488886102e860018261234d565b8181106102f7576102f761228d565b90506020028101906103099190612360565b61031a90608081019060600161239e565b73ffffffffffffffffffffffffffffffffffffffff161590565b61036a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037f89600001518a60c001518a8a3361055c565b60c08a015261038e89876106a4565b50479050818111156103af576103af6000846103aa858561234d565b610892565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610438576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561010083015183901561047b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156104b9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff161561050b576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c001513414610548576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055285856106a4565b5050600090555050565b600082808203610598576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105a760018561234d565b8181106105b6576105b661228d565b90506020028101906105c89190612360565b6105d990608081019060600161239e565b905060006105e6826108c8565b905073ffffffffffffffffffffffffffffffffffffffff82166106105761060d348261234d565b90505b600061061c8888610981565b90506106288888610a8d565b6106358a89898985610afa565b600082610641856108c8565b61064b919061234d565b905089811015610696576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b80356106dc576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480159061073457508160a0015160601b6bffffffffffffffffffffffff1916816000013514155b1561076b576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036107a8576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044016000604051808303818588803b15801561083e57600080fd5b505af1158015610852573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108869190612427565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108be576108b9838383610e92565b505050565b6108b98282611014565b600073ffffffffffffffffffffffffffffffffffffffff821615610979576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610950573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610974919061253a565b61097b565b475b92915050565b60608160008167ffffffffffffffff81111561099f5761099f611f7c565b6040519080825280602002602001820160405280156109c8578160200160208202803683370190505b5090506000805b83811015610a82578686828181106109e9576109e961228d565b90506020028101906109fb9190612360565b610a0c90608081019060600161239e565b9150610a17826108c8565b838281518110610a2957610a2961228d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a7a5734838281518110610a6257610a6261228d565b60200260200101818151610a76919061234d565b9052505b6001016109cf565b509095945050505050565b60005b818110156108b95736838383818110610aab57610aab61228d565b9050602002810190610abd9190612360565b9050610acf60e0820160c08301612553565b15610af157610af1610ae7606083016040840161239e565b826080013561113e565b50600101610a90565b838383838260018114610dad5760008585610b1660018561234d565b818110610b2557610b2561228d565b9050602002810190610b379190612360565b610b4890608081019060600161239e565b9050600089815b81811015610cd957368d8d83818110610b6a57610b6a61228d565b9050602002810190610b7c9190612360565b9050610b9161031a606083016040840161239e565b80610bf45750610bf4610baa604083016020840161239e565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c0b5750610c0b610baa602083018361239e565b8015610c905750610c90610c2260a0830183612570565b610c31916004916000916125d5565b610c3a916125ff565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610cc6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cd08f826112b4565b50600101610b4f565b505060005b610ce960018561234d565b811015610da5576000888883818110610d0457610d0461228d565b9050602002810190610d169190612360565b610d2790608081019060600161239e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d9c57858281518110610d6e57610d6e61228d565b6020026020010151610d7f826108c8565b610d89919061234d565b92508215610d9c57610d9c818885610892565b50600101610cde565b505050610e86565b8760005b81811015610e8357368b8b83818110610dcc57610dcc61228d565b9050602002810190610dde9190612360565b9050610df361031a606083016040840161239e565b80610e0c5750610e0c610baa604083016020840161239e565b8015610e235750610e23610baa602083018361239e565b8015610e3a5750610e3a610c2260a0830183612570565b610e70576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e7a8d826112b4565b50600101610db1565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610edf576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f2c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbd919061253a565b905080821115611003576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161068d565b61100e848484611592565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611061576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110a4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161068d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110fe576040519150601f19603f3d011682016040523d82523d6000602084013e611103565b606091505b50509050806108b9576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003611178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111d157803410156111cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561123e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611262919061253a565b9050818110156112a8576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161068d565b6108b983333085611666565b6112ca6112c4602083018361239e565b3b151590565b611300576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611340576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061135561031a606085016040860161239e565b611360576000611366565b82608001355b9050600061138261137d606086016040870161239e565b6108c8565b9050600061139961137d608087016060880161239e565b9050826000036113d0576113d06113b6606087016040880161239e565b6113c6604088016020890161239e565b8760800135611880565b846080013582101561141b576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161068d565b60008061142b602088018861239e565b73ffffffffffffffffffffffffffffffffffffffff168561144f60a08a018a612570565b60405161145d929190612645565b60006040518083038185875af1925050503d806000811461149a576040519150601f19603f3d011682016040523d82523d6000602084013e61149f565b606091505b5091509150816114b2576114b2816119b7565b60006114c761137d60808a0160608b0161239e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896114f860208b018b61239e565b61150860608c0160408d0161239e565b61151860808d0160608e0161239e565b8c6080013589871161152a5786611534565b6115348a8861234d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108b99084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119c1565b73ffffffffffffffffffffffffffffffffffffffff84166116b3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611700576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611771573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611795919061253a565b90506117a382868686611ad0565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611813573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611837919061253a565b611841919061234d565b14611878576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166118a057505050565b73ffffffffffffffffffffffffffffffffffffffff82166118ed576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611962573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611986919061253a565b10156108b9576108b983837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b2e565b8051602082018181fd5b6000611a23826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c1e9092919063ffffffff16565b9050805160001480611a44575080806020019051810190611a449190612655565b6108b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161068d565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261100e9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016115e4565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611bba8482611c35565b61100e5760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611c149085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115e4565b61100e84826119c1565b6060611c2d8484600085611cf6565b949350505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611c5f9190612672565b6000604051808303816000865af19150503d8060008114611c9c576040519150601f19603f3d011682016040523d82523d6000602084013e611ca1565b606091505b5091509150818015611ccb575080511580611ccb575080806020019051810190611ccb9190612655565b8015611ced575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b606082471015611d88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161068d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611db19190612672565b60006040518083038185875af1925050503d8060008114611dee576040519150601f19603f3d011682016040523d82523d6000602084013e611df3565b606091505b5091509150611e0487838387611e0f565b979650505050505050565b60608315611ea5578251600003611e9e5773ffffffffffffffffffffffffffffffffffffffff85163b611e9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161068d565b5081611c2d565b611c2d8383815115611eba5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068d9190612684565b60008083601f840112611f0057600080fd5b50813567ffffffffffffffff811115611f1857600080fd5b6020830191508360208260051b8501011115611f3357600080fd5b9250929050565b60008060208385031215611f4d57600080fd5b823567ffffffffffffffff811115611f6457600080fd5b611f7085828601611eee565b90969095509350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fcf57611fcf611f7c565b60405290565b600082601f830112611fe657600080fd5b813567ffffffffffffffff8082111561200157612001611f7c565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561204757612047611f7c565b8160405283815286602085880101111561206057600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120a457600080fd5b919050565b80151581146120b757600080fd5b50565b80356120a4816120a9565b600061014082840312156120d857600080fd5b6120e0611fab565b905081358152602082013567ffffffffffffffff8082111561210157600080fd5b61210d85838601611fd5565b6020840152604084013591508082111561212657600080fd5b5061213384828501611fd5565b60408301525061214560608301612080565b606082015261215660808301612080565b608082015261216760a08301612080565b60a082015260c082013560c082015260e082013560e082015261010061218e8184016120ba565b908201526101206121a08382016120ba565b9082015292915050565b6000604082840312156121bc57600080fd5b50919050565b600080600080608085870312156121d857600080fd5b843567ffffffffffffffff808211156121f057600080fd5b6121fc888389016120c5565b9550602087013591508082111561221257600080fd5b5061221f87828801611eee565b9094509250612233905086604087016121aa565b905092959194509250565b6000806060838503121561225157600080fd5b823567ffffffffffffffff81111561226857600080fd5b612274858286016120c5565b92505061228484602085016121aa565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156122ce57600080fd5b813560ff811681146122df57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612346576123466122e6565b5060010190565b8181038181111561097b5761097b6122e6565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261239457600080fd5b9190910192915050565b6000602082840312156123b057600080fd5b6122df82612080565b60005b838110156123d45781810151838201526020016123bc565b50506000910152565b600081518084526123f58160208601602086016123b9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124506101608501836123dd565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261248b83826123dd565b92505060608501516124b5608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125288187018315159052565b90950151151593019290925250919050565b60006020828403121561254c57600080fd5b5051919050565b60006020828403121561256557600080fd5b81356122df816120a9565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125a557600080fd5b83018035915067ffffffffffffffff8211156125c057600080fd5b602001915036819003821315611f3357600080fd5b600080858511156125e557600080fd5b838611156125f257600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156101c75760049490940360031b84901b1690921692915050565b8183823760009101908152919050565b60006020828403121561266757600080fd5b81516122df816120a9565b600082516123948184602087016123b9565b6020815260006122df60208301846123dd56fea26469706673582212206217d6ac6deffa16cd0943343bf7fa53766f7a601fb7ff510893b67ae3ebe93864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "GAS_ZIP_ROUTER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "NON_EVM_ADDRESS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDestinationChainsValue";
        readonly inputs: readonly [{
            readonly name: "_chainIds";
            readonly type: "uint8[]";
            readonly internalType: "uint8[]";
        }];
        readonly outputs: readonly [{
            readonly name: "destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
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
        readonly name: "OnlyNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TooManyChainIds";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipFacet;
}
export {};
