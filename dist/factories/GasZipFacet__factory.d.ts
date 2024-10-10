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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200272a3803806200272a833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516126906200009a60003960008181609e01526107b201526126906000f3fe60806040526004361061003f5760003560e01c80633497d1161461004457806346fd98e214610059578063ba956b9a1461008c578063d296e0e4146100e5575b600080fd5b610057610052366004612143565b6100f8565b005b34801561006557600080fd5b506100796100743660046121bf565b61032a565b6040519081526020015b60405180910390f35b34801561009857600080fd5b506100c07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610083565b6100576100f3366004612201565b6103be565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610173576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610184344761227f565b9050866101a98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361021e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361025b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101000151610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88806101200151156102d6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102eb8a600001518b60c001518b8b3361062c565b60c08b01526102fa8a88610774565b50479150508181111561031c5761031c600084610317858561227f565b61085e565b505060009091555050505050565b6000816020811115610368576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156103b65784848281811061038557610385612292565b905060200201602081019061039a91906122c1565b60ff16600884901b179250806103af906122eb565b905061036b565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610439576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560a0830151839073ffffffffffffffffffffffffffffffffffffffff16610490576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104ce576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361050b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8380610100015115610549576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610587576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608086015173ffffffffffffffffffffffffffffffffffffffff16156105d9576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8560c001513414610616576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106208686610774565b50506000909155505050565b600082808203610668576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561067760018561227f565b81811061068657610686612292565b90506020028101906106989190612323565b6106a9906080810190606001612361565b905060006106b682610894565b905073ffffffffffffffffffffffffffffffffffffffff82166106e0576106dd348261227f565b90505b60006106ec888861094d565b90506106f88888610a59565b6107058a89898985610ac6565b60008261071185610894565b61071b919061227f565b905089811015610766576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815282356004820152602083013560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044016000604051808303818588803b15801561080a57600080fd5b505af115801561081e573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161085291906123ea565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561088a57610885838383610e78565b505050565b6108858282610ffa565b600073ffffffffffffffffffffffffffffffffffffffff821615610945576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561091c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094091906124fd565b610947565b475b92915050565b60608160008167ffffffffffffffff81111561096b5761096b611eb1565b604051908082528060200260200182016040528015610994578160200160208202803683370190505b5090506000805b83811015610a4e578686828181106109b5576109b5612292565b90506020028101906109c79190612323565b6109d8906080810190606001612361565b91506109e382610894565b8382815181106109f5576109f5612292565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a465734838281518110610a2e57610a2e612292565b60200260200101818151610a42919061227f565b9052505b60010161099b565b509095945050505050565b60005b818110156108855736838383818110610a7757610a77612292565b9050602002810190610a899190612323565b9050610a9b60e0820160c08301612516565b15610abd57610abd610ab36060830160408401612361565b8260800135611124565b50600101610a5c565b838383838260018114610d935760008585610ae260018561227f565b818110610af157610af1612292565b9050602002810190610b039190612323565b610b14906080810190606001612361565b9050600089815b81811015610cbf57368d8d83818110610b3657610b36612292565b9050602002810190610b489190612323565b9050610b77610b5d6060830160408401612361565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610bda5750610bda610b906040830160208401612361565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610bf15750610bf1610b906020830183612361565b8015610c765750610c76610c0860a0830183612533565b610c1791600491600091612598565b610c20916125c2565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610cac576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cb68f8261129a565b50600101610b1b565b505060005b610ccf60018561227f565b811015610d8b576000888883818110610cea57610cea612292565b9050602002810190610cfc9190612323565b610d0d906080810190606001612361565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d8257858281518110610d5457610d54612292565b6020026020010151610d6582610894565b610d6f919061227f565b92508215610d8257610d8281888561085e565b50600101610cc4565b505050610e6c565b8760005b81811015610e6957368b8b83818110610db257610db2612292565b9050602002810190610dc49190612323565b9050610dd9610b5d6060830160408401612361565b80610df25750610df2610b906040830160208401612361565b8015610e095750610e09610b906020830183612361565b8015610e205750610e20610c0860a0830183612533565b610e56576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e608d8261129a565b50600101610d97565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ec5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f12576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa391906124fd565b905080821115610fe9576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161075d565b610ff4848484611578565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611047576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561108a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161075d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110e4576040519150601f19603f3d011682016040523d82523d6000602084013e6110e9565b606091505b5050905080610885576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060000361115e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111b757803410156111b3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611224573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124891906124fd565b90508181101561128e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161075d565b6108858333308561164c565b6112b06112aa6020830183612361565b3b151590565b6112e6576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611326576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061133b610b5d6060850160408601612361565b61134657600061134c565b82608001355b905060006113686113636060860160408701612361565b610894565b9050600061137f6113636080870160608801612361565b9050826000036113b6576113b661139c6060870160408801612361565b6113ac6040880160208901612361565b8760800135611866565b8460800135821015611401576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161075d565b6000806114116020880188612361565b73ffffffffffffffffffffffffffffffffffffffff168561143560a08a018a612533565b604051611443929190612608565b60006040518083038185875af1925050503d8060008114611480576040519150601f19603f3d011682016040523d82523d6000602084013e611485565b606091505b50915091508161149857611498816119a9565b60006114ad61136360808a0160608b01612361565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896114de60208b018b612361565b6114ee60608c0160408d01612361565b6114fe60808d0160608e01612361565b8c60800135898711611510578661151a565b61151a8a8861227f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108859084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119b3565b73ffffffffffffffffffffffffffffffffffffffff8416611699576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166116e6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061177b91906124fd565b905061178982868686611ac2565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156117f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061181d91906124fd565b611827919061227f565b1461185e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661188657505050565b73ffffffffffffffffffffffffffffffffffffffff82166118d3576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611948573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196c91906124fd565b10156108855761197e83836000611b20565b61088583837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b20565b8051602082018181fd5b6000611a15826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ca29092919063ffffffff16565b9050805160001480611a36575080806020019051810190611a369190612618565b610885576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161075d565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ff49085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016115ca565b801580611bc057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611b9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bbe91906124fd565b155b611c4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161075d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108859084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115ca565b6060611cb18484600085611cb9565b949350505050565b606082471015611d4b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161075d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d749190612635565b60006040518083038185875af1925050503d8060008114611db1576040519150601f19603f3d011682016040523d82523d6000602084013e611db6565b606091505b5091509150611dc787838387611dd2565b979650505050505050565b60608315611e68578251600003611e615773ffffffffffffffffffffffffffffffffffffffff85163b611e61576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161075d565b5081611cb1565b611cb18383815115611e7d5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075d9190612647565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f0457611f04611eb1565b60405290565b600082601f830112611f1b57600080fd5b813567ffffffffffffffff80821115611f3657611f36611eb1565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f7c57611f7c611eb1565b81604052838152866020858801011115611f9557600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611fd957600080fd5b919050565b8015158114611fec57600080fd5b50565b8035611fd981611fde565b6000610140828403121561200d57600080fd5b612015611ee0565b905081358152602082013567ffffffffffffffff8082111561203657600080fd5b61204285838601611f0a565b6020840152604084013591508082111561205b57600080fd5b5061206884828501611f0a565b60408301525061207a60608301611fb5565b606082015261208b60808301611fb5565b608082015261209c60a08301611fb5565b60a082015260c082013560c082015260e082013560e08201526101006120c3818401611fef565b908201526101206120d5838201611fef565b9082015292915050565b60008083601f8401126120f157600080fd5b50813567ffffffffffffffff81111561210957600080fd5b6020830191508360208260051b850101111561212457600080fd5b9250929050565b60006040828403121561213d57600080fd5b50919050565b6000806000806080858703121561215957600080fd5b843567ffffffffffffffff8082111561217157600080fd5b61217d88838901611ffa565b9550602087013591508082111561219357600080fd5b506121a0878288016120df565b90945092506121b49050866040870161212b565b905092959194509250565b600080602083850312156121d257600080fd5b823567ffffffffffffffff8111156121e957600080fd5b6121f5858286016120df565b90969095509350505050565b6000806060838503121561221457600080fd5b823567ffffffffffffffff81111561222b57600080fd5b61223785828601611ffa565b925050612247846020850161212b565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561094757610947612250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156122d357600080fd5b813560ff811681146122e457600080fd5b9392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361231c5761231c612250565b5060010190565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261235757600080fd5b9190910192915050565b60006020828403121561237357600080fd5b6122e482611fb5565b60005b8381101561239757818101518382015260200161237f565b50506000910152565b600081518084526123b881602086016020860161237c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124136101608501836123a0565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261244e83826123a0565b9250506060850151612478608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124eb8187018315159052565b90950151151593019290925250919050565b60006020828403121561250f57600080fd5b5051919050565b60006020828403121561252857600080fd5b81356122e481611fde565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261256857600080fd5b83018035915067ffffffffffffffff82111561258357600080fd5b60200191503681900382131561212457600080fd5b600080858511156125a857600080fd5b838611156125b557600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156103b65760049490940360031b84901b1690921692915050565b8183823760009101908152919050565b60006020828403121561262a57600080fd5b81516122e481611fde565b6000825161235781846020870161237c565b6020815260006122e460208301846123a056fea264697066735822122012551591e095e404319f62fc26250d4c8ccdbe1967489129ed4499220e47a59b64736f6c63430008110033";
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
