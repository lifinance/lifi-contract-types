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
    static readonly bytecode = "0x60a0604052600080546001600160a01b0319167311f111f111f111f111f111f111f111f111f111f11790553480156200003757600080fd5b506040516200276c3803806200276c8339810160408190526200005a916200006c565b6001600160a01b03166080526200009e565b6000602082840312156200007f57600080fd5b81516001600160a01b03811681146200009757600080fd5b9392505050565b6080516126ab620000c16000396000818161010b01526107e701526126ab6000f3fe60806040526004361061005a5760003560e01c806346fd98e21161004357806346fd98e2146100cb578063ba956b9a146100f9578063d296e0e41461012d57600080fd5b80630ae2f1db1461005f5780633497d116146100b6575b600080fd5b34801561006b57600080fd5b5060005461008c9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100c96100c436600461215e565b610140565b005b3480156100d757600080fd5b506100eb6100e63660046121da565b61032e565b6040519081526020016100ad565b34801561010557600080fd5b5061008c7f000000000000000000000000000000000000000000000000000000000000000081565b6100c961013b36600461221c565b6103c2565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101bb576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101cc344761229a565b90508680610100015161020b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610249576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a5888861025960018261229a565b818110610268576102686122ad565b905060200281019061027a91906122dc565b61028b90608081019060600161231a565b73ffffffffffffffffffffffffffffffffffffffff161590565b6102db576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102f089600001518a60c001518a8a33610561565b60c08a01526102ff89876106a9565b50479050818111156103205761032060008461031b858561229a565b610893565b505060009091555050505050565b600081602081111561036c576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156103ba57848482818110610389576103896122ad565b905060200201602081019061039e919061233c565b60ff16600884901b179250806103b39061235f565b905061036f565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161043d576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100830151839015610480576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156104be576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff1615610510576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c00151341461054d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055785856106a9565b5050600090555050565b60008280820361059d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105ac60018561229a565b8181106105bb576105bb6122ad565b90506020028101906105cd91906122dc565b6105de90608081019060600161231a565b905060006105eb826108c9565b905073ffffffffffffffffffffffffffffffffffffffff821661061557610612348261229a565b90505b60006106218888610982565b905061062d8888610a8e565b61063a8a89898985610afb565b600082610646856108c9565b610650919061229a565b90508981101561069b576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60208101356106e4576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005460a083015173ffffffffffffffffffffffffffffffffffffffff90811691161480159061073557508160a0015173ffffffffffffffffffffffffffffffffffffffff1660001b816020013514155b1561076c576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036107a9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815282356004820152602083013560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044016000604051808303818588803b15801561083f57600080fd5b505af1158015610853573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108879190612405565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108bf576108ba838383610e93565b505050565b6108ba8282611015565b600073ffffffffffffffffffffffffffffffffffffffff82161561097a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610951573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109759190612518565b61097c565b475b92915050565b60608160008167ffffffffffffffff8111156109a0576109a0611ecc565b6040519080825280602002602001820160405280156109c9578160200160208202803683370190505b5090506000805b83811015610a83578686828181106109ea576109ea6122ad565b90506020028101906109fc91906122dc565b610a0d90608081019060600161231a565b9150610a18826108c9565b838281518110610a2a57610a2a6122ad565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a7b5734838281518110610a6357610a636122ad565b60200260200101818151610a77919061229a565b9052505b6001016109d0565b509095945050505050565b60005b818110156108ba5736838383818110610aac57610aac6122ad565b9050602002810190610abe91906122dc565b9050610ad060e0820160c08301612531565b15610af257610af2610ae8606083016040840161231a565b826080013561113f565b50600101610a91565b838383838260018114610dae5760008585610b1760018561229a565b818110610b2657610b266122ad565b9050602002810190610b3891906122dc565b610b4990608081019060600161231a565b9050600089815b81811015610cda57368d8d83818110610b6b57610b6b6122ad565b9050602002810190610b7d91906122dc565b9050610b9261028b606083016040840161231a565b80610bf55750610bf5610bab604083016020840161231a565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c0c5750610c0c610bab602083018361231a565b8015610c915750610c91610c2360a083018361254e565b610c32916004916000916125b3565b610c3b916125dd565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610cc7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cd18f826112b5565b50600101610b50565b505060005b610cea60018561229a565b811015610da6576000888883818110610d0557610d056122ad565b9050602002810190610d1791906122dc565b610d2890608081019060600161231a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d9d57858281518110610d6f57610d6f6122ad565b6020026020010151610d80826108c9565b610d8a919061229a565b92508215610d9d57610d9d818885610893565b50600101610cdf565b505050610e87565b8760005b81811015610e8457368b8b83818110610dcd57610dcd6122ad565b9050602002810190610ddf91906122dc565b9050610df461028b606083016040840161231a565b80610e0d5750610e0d610bab604083016020840161231a565b8015610e245750610e24610bab602083018361231a565b8015610e3b5750610e3b610c2360a083018361254e565b610e71576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e7b8d826112b5565b50600101610db2565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ee0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f2d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbe9190612518565b905080821115611004576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610692565b61100f848484611593565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611062576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110a5576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610692565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110ff576040519150601f19603f3d011682016040523d82523d6000602084013e611104565b606091505b50509050806108ba576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003611179576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111d257803410156111ce576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561123f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112639190612518565b9050818110156112a9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610692565b6108ba83333085611667565b6112cb6112c5602083018361231a565b3b151590565b611301576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611341576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061135661028b606085016040860161231a565b611361576000611367565b82608001355b9050600061138361137e606086016040870161231a565b6108c9565b9050600061139a61137e608087016060880161231a565b9050826000036113d1576113d16113b7606087016040880161231a565b6113c7604088016020890161231a565b8760800135611881565b846080013582101561141c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610692565b60008061142c602088018861231a565b73ffffffffffffffffffffffffffffffffffffffff168561145060a08a018a61254e565b60405161145e929190612623565b60006040518083038185875af1925050503d806000811461149b576040519150601f19603f3d011682016040523d82523d6000602084013e6114a0565b606091505b5091509150816114b3576114b3816119c4565b60006114c861137e60808a0160608b0161231a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896114f960208b018b61231a565b61150960608c0160408d0161231a565b61151960808d0160608e0161231a565b8c6080013589871161152b5786611535565b6115358a8861229a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108ba9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119ce565b73ffffffffffffffffffffffffffffffffffffffff84166116b4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611701576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611772573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117969190612518565b90506117a482868686611add565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611814573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118389190612518565b611842919061229a565b14611879576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166118a157505050565b73ffffffffffffffffffffffffffffffffffffffff82166118ee576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611963573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119879190612518565b10156108ba5761199983836000611b3b565b6108ba83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b3b565b8051602082018181fd5b6000611a30826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cbd9092919063ffffffff16565b9050805160001480611a51575080806020019051810190611a519190612633565b6108ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610692565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261100f9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016115e5565b801580611bdb57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611bb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bd99190612518565b155b611c67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610692565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108ba9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115e5565b6060611ccc8484600085611cd4565b949350505050565b606082471015611d66576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610692565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d8f9190612650565b60006040518083038185875af1925050503d8060008114611dcc576040519150601f19603f3d011682016040523d82523d6000602084013e611dd1565b606091505b5091509150611de287838387611ded565b979650505050505050565b60608315611e83578251600003611e7c5773ffffffffffffffffffffffffffffffffffffffff85163b611e7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610692565b5081611ccc565b611ccc8383815115611e985781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106929190612662565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f1f57611f1f611ecc565b60405290565b600082601f830112611f3657600080fd5b813567ffffffffffffffff80821115611f5157611f51611ecc565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f9757611f97611ecc565b81604052838152866020858801011115611fb057600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ff457600080fd5b919050565b801515811461200757600080fd5b50565b8035611ff481611ff9565b6000610140828403121561202857600080fd5b612030611efb565b905081358152602082013567ffffffffffffffff8082111561205157600080fd5b61205d85838601611f25565b6020840152604084013591508082111561207657600080fd5b5061208384828501611f25565b60408301525061209560608301611fd0565b60608201526120a660808301611fd0565b60808201526120b760a08301611fd0565b60a082015260c082013560c082015260e082013560e08201526101006120de81840161200a565b908201526101206120f083820161200a565b9082015292915050565b60008083601f84011261210c57600080fd5b50813567ffffffffffffffff81111561212457600080fd5b6020830191508360208260051b850101111561213f57600080fd5b9250929050565b60006040828403121561215857600080fd5b50919050565b6000806000806080858703121561217457600080fd5b843567ffffffffffffffff8082111561218c57600080fd5b61219888838901612015565b955060208701359150808211156121ae57600080fd5b506121bb878288016120fa565b90945092506121cf90508660408701612146565b905092959194509250565b600080602083850312156121ed57600080fd5b823567ffffffffffffffff81111561220457600080fd5b612210858286016120fa565b90969095509350505050565b6000806060838503121561222f57600080fd5b823567ffffffffffffffff81111561224657600080fd5b61225285828601612015565b9250506122628460208501612146565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561097c5761097c61226b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261231057600080fd5b9190910192915050565b60006020828403121561232c57600080fd5b61233582611fd0565b9392505050565b60006020828403121561234e57600080fd5b813560ff8116811461233557600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036123905761239061226b565b5060010190565b60005b838110156123b257818101518382015260200161239a565b50506000910152565b600081518084526123d3816020860160208601612397565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261242e6101608501836123bb565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261246983826123bb565b9250506060850151612493608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125068187018315159052565b90950151151593019290925250919050565b60006020828403121561252a57600080fd5b5051919050565b60006020828403121561254357600080fd5b813561233581611ff9565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261258357600080fd5b83018035915067ffffffffffffffff82111561259e57600080fd5b60200191503681900382131561213f57600080fd5b600080858511156125c357600080fd5b838611156125d057600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156103ba5760049490940360031b84901b1690921692915050565b8183823760009101908152919050565b60006020828403121561264557600080fd5b815161233581611ff9565b60008251612310818460208701612397565b60208152600061233560208301846123bb56fea264697066735822122023cb10f459327267564b4fc2782ff8d4fae8a51bfbfc954fe83d3f2b2d19598964736f6c63430008110033";
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
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
