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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200274638038062002746833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516126ab6200009b6000396000818161010601526107e701526126ab6000f3fe60806040526004361061005a5760003560e01c8063606326ff11610043578063606326ff146100df578063ba956b9a146100f4578063fc5f10031461012857600080fd5b80630ae2f1db1461005f57806346fd98e2146100b1575b600080fd5b34801561006b57600080fd5b506100877311f111f111f111f111f111f111f111f111f111f181565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100bd57600080fd5b506100d16100cc366004611f18565b61013b565b6040519081526020016100a8565b6100f26100ed3660046121a0565b6101cf565b005b34801561010057600080fd5b506100877f000000000000000000000000000000000000000000000000000000000000000081565b6100f261013636600461221c565b6103bd565b6000816020811115610179576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156101c7578484828181106101965761019661226b565b90506020020160208101906101ab919061229a565b60ff16600884901b179250806101c0906122f3565b905061017c565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161024a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061025b344761232b565b90508680610100015161029a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156102d8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61033488886102e860018261232b565b8181106102f7576102f761226b565b9050602002810190610309919061233e565b61031a90608081019060600161237c565b73ffffffffffffffffffffffffffffffffffffffff161590565b61036a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037f89600001518a60c001518a8a3361055c565b60c08a015261038e89876106a4565b50479050818111156103af576103af6000846103aa858561232b565b610893565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610438576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561010083015183901561047b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156104b9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff161561050b576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c001513414610548576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055285856106a4565b5050600090555050565b600082808203610598576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105a760018561232b565b8181106105b6576105b661226b565b90506020028101906105c8919061233e565b6105d990608081019060600161237c565b905060006105e6826108c9565b905073ffffffffffffffffffffffffffffffffffffffff82166106105761060d348261232b565b90505b600061061c8888610982565b90506106288888610a8e565b6106358a89898985610afb565b600082610641856108c9565b61064b919061232b565b905089811015610696576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b80356106dc576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801590610735575060a082015173ffffffffffffffffffffffffffffffffffffffff16813514155b1561076c576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036107a9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044016000604051808303818588803b15801561083f57600080fd5b505af1158015610853573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108879190612405565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108bf576108ba838383610e93565b505050565b6108ba8282611015565b600073ffffffffffffffffffffffffffffffffffffffff82161561097a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610951573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109759190612518565b61097c565b475b92915050565b60608160008167ffffffffffffffff8111156109a0576109a0611f5a565b6040519080825280602002602001820160405280156109c9578160200160208202803683370190505b5090506000805b83811015610a83578686828181106109ea576109ea61226b565b90506020028101906109fc919061233e565b610a0d90608081019060600161237c565b9150610a18826108c9565b838281518110610a2a57610a2a61226b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a7b5734838281518110610a6357610a6361226b565b60200260200101818151610a77919061232b565b9052505b6001016109d0565b509095945050505050565b60005b818110156108ba5736838383818110610aac57610aac61226b565b9050602002810190610abe919061233e565b9050610ad060e0820160c08301612531565b15610af257610af2610ae8606083016040840161237c565b826080013561113f565b50600101610a91565b838383838260018114610dae5760008585610b1760018561232b565b818110610b2657610b2661226b565b9050602002810190610b38919061233e565b610b4990608081019060600161237c565b9050600089815b81811015610cda57368d8d83818110610b6b57610b6b61226b565b9050602002810190610b7d919061233e565b9050610b9261031a606083016040840161237c565b80610bf55750610bf5610bab604083016020840161237c565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c0c5750610c0c610bab602083018361237c565b8015610c915750610c91610c2360a083018361254e565b610c32916004916000916125b3565b610c3b916125dd565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610cc7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cd18f826112b5565b50600101610b50565b505060005b610cea60018561232b565b811015610da6576000888883818110610d0557610d0561226b565b9050602002810190610d17919061233e565b610d2890608081019060600161237c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d9d57858281518110610d6f57610d6f61226b565b6020026020010151610d80826108c9565b610d8a919061232b565b92508215610d9d57610d9d818885610893565b50600101610cdf565b505050610e87565b8760005b81811015610e8457368b8b83818110610dcd57610dcd61226b565b9050602002810190610ddf919061233e565b9050610df461031a606083016040840161237c565b80610e0d5750610e0d610bab604083016020840161237c565b8015610e245750610e24610bab602083018361237c565b8015610e3b5750610e3b610c2360a083018361254e565b610e71576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e7b8d826112b5565b50600101610db2565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ee0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f2d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbe9190612518565b905080821115611004576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161068d565b61100f848484611593565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611062576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110a5576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161068d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110ff576040519150601f19603f3d011682016040523d82523d6000602084013e611104565b606091505b50509050806108ba576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003611179576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111d257803410156111ce576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561123f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112639190612518565b9050818110156112a9576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161068d565b6108ba83333085611667565b6112cb6112c5602083018361237c565b3b151590565b611301576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611341576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061135661031a606085016040860161237c565b611361576000611367565b82608001355b9050600061138361137e606086016040870161237c565b6108c9565b9050600061139a61137e608087016060880161237c565b9050826000036113d1576113d16113b7606087016040880161237c565b6113c7604088016020890161237c565b8760800135611881565b846080013582101561141c576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161068d565b60008061142c602088018861237c565b73ffffffffffffffffffffffffffffffffffffffff168561145060a08a018a61254e565b60405161145e929190612623565b60006040518083038185875af1925050503d806000811461149b576040519150601f19603f3d011682016040523d82523d6000602084013e6114a0565b606091505b5091509150816114b3576114b3816119c4565b60006114c861137e60808a0160608b0161237c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896114f960208b018b61237c565b61150960608c0160408d0161237c565b61151960808d0160608e0161237c565b8c6080013589871161152b5786611535565b6115358a8861232b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108ba9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119ce565b73ffffffffffffffffffffffffffffffffffffffff84166116b4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611701576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611772573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117969190612518565b90506117a482868686611add565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611814573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118389190612518565b611842919061232b565b14611879576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166118a157505050565b73ffffffffffffffffffffffffffffffffffffffff82166118ee576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611963573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119879190612518565b10156108ba5761199983836000611b3b565b6108ba83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b3b565b8051602082018181fd5b6000611a30826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cbd9092919063ffffffff16565b9050805160001480611a51575080806020019051810190611a519190612633565b6108ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161068d565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261100f9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016115e5565b801580611bdb57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611bb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bd99190612518565b155b611c67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161068d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108ba9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115e5565b6060611ccc8484600085611cd4565b949350505050565b606082471015611d66576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161068d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d8f9190612650565b60006040518083038185875af1925050503d8060008114611dcc576040519150601f19603f3d011682016040523d82523d6000602084013e611dd1565b606091505b5091509150611de287838387611ded565b979650505050505050565b60608315611e83578251600003611e7c5773ffffffffffffffffffffffffffffffffffffffff85163b611e7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161068d565b5081611ccc565b611ccc8383815115611e985781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068d9190612662565b60008083601f840112611ede57600080fd5b50813567ffffffffffffffff811115611ef657600080fd5b6020830191508360208260051b8501011115611f1157600080fd5b9250929050565b60008060208385031215611f2b57600080fd5b823567ffffffffffffffff811115611f4257600080fd5b611f4e85828601611ecc565b90969095509350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fad57611fad611f5a565b60405290565b600082601f830112611fc457600080fd5b813567ffffffffffffffff80821115611fdf57611fdf611f5a565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561202557612025611f5a565b8160405283815286602085880101111561203e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461208257600080fd5b919050565b801515811461209557600080fd5b50565b803561208281612087565b600061014082840312156120b657600080fd5b6120be611f89565b905081358152602082013567ffffffffffffffff808211156120df57600080fd5b6120eb85838601611fb3565b6020840152604084013591508082111561210457600080fd5b5061211184828501611fb3565b6040830152506121236060830161205e565b60608201526121346080830161205e565b608082015261214560a0830161205e565b60a082015260c082013560c082015260e082013560e082015261010061216c818401612098565b9082015261012061217e838201612098565b9082015292915050565b60006040828403121561219a57600080fd5b50919050565b600080600080608085870312156121b657600080fd5b843567ffffffffffffffff808211156121ce57600080fd5b6121da888389016120a3565b955060208701359150808211156121f057600080fd5b506121fd87828801611ecc565b909450925061221190508660408701612188565b905092959194509250565b6000806060838503121561222f57600080fd5b823567ffffffffffffffff81111561224657600080fd5b612252858286016120a3565b9250506122628460208501612188565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156122ac57600080fd5b813560ff811681146122bd57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612324576123246122c4565b5060010190565b8181038181111561097c5761097c6122c4565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261237257600080fd5b9190910192915050565b60006020828403121561238e57600080fd5b6122bd8261205e565b60005b838110156123b257818101518382015260200161239a565b50506000910152565b600081518084526123d3816020860160208601612397565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261242e6101608501836123bb565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261246983826123bb565b9250506060850151612493608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125068187018315159052565b90950151151593019290925250919050565b60006020828403121561252a57600080fd5b5051919050565b60006020828403121561254357600080fd5b81356122bd81612087565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261258357600080fd5b83018035915067ffffffffffffffff82111561259e57600080fd5b602001915036819003821315611f1157600080fd5b600080858511156125c357600080fd5b838611156125d057600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156101c75760049490940360031b84901b1690921692915050565b8183823760009101908152919050565b60006020828403121561264557600080fd5b81516122bd81612087565b60008251612372818460208701612397565b6020815260006122bd60208301846123bb56fea264697066735822122081c2d7d5d60a7cdac0a8089c2197073fbb93dc2f742ec1ce4c1f88e7bce67d4464736f6c63430008110033";
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
        readonly name: "NON_EVM_RECEIVER_IDENTIFIER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "gasZipRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
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
