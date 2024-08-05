import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AllBridgeFacet, AllBridgeFacetInterface } from "../AllBridgeFacet";
declare type AllBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AllBridgeFacet__factory extends ContractFactory {
    constructor(...args: AllBridgeFacetConstructorParams);
    deploy(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AllBridgeFacet>;
    getDeployTransaction(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AllBridgeFacet;
    connect(signer: Signer): AllBridgeFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200273438038062002734833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612692620000a26000396000818161061501528181610655015261075401526126926000f3fe6080604052600436106100345760003560e01c8063a74ccb3514610039578063e40f24601461004e578063f07494a014610061575b600080fd5b61004c610047366004612109565b61006d565b005b61004c61005c3660046121b6565b61029f565b34801561004c57600080fd5b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100e8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100f93447612206565b905086806101000151610138576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610176576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101998160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101d0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361020e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361024b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102608a600001518b60c001518b8b336104c3565b60c08b015261026f8a8861060b565b5047915050818111156102915761029160008461028c8585612206565b610870565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161031a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061032b3447612206565b9050846103508160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610387576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103c5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610402576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610440576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561047e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61049088608001518960c001516108a6565b61049a888861060b565b5047915050818111156104b7576104b760008461028c8585612206565b50506000909155505050565b6000828082036104ff576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561050e600185612206565b81811061051d5761051d612240565b905060200281019061052f919061226f565b6105409060808101906060016122ad565b9050600061054d82610a1c565b905073ffffffffffffffffffffffffffffffffffffffff8216610577576105743482612206565b90505b60006105838888610ad5565b905061058f8888610be1565b61059c8a89898985610c4e565b6000826105a885610a1c565b6105b29190612206565b9050898110156105fd576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b61063e82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151611000565b61064e60e0820160c083016122cf565b15610752577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd836080015173ffffffffffffffffffffffffffffffffffffffff1660001b8460c0015184602001358560400135866060013587608001358860a00160208101906106d991906122ec565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b16815261071b97969594939291908b3590600401612348565b600060405180830381600087803b15801561073557600080fd5b505af1158015610749573d6000803e3d6000fd5b50505050610835565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd8260000135846080015173ffffffffffffffffffffffffffffffffffffffff1660001b8560c0015185602001358660400135876060013588608001358960a00160208101906107dd91906122ec565b60006040518a63ffffffff1660e01b8152600401610802989796959493929190612348565b6000604051808303818588803b15801561081b57600080fd5b505af115801561082f573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108649190612400565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561089c57610897838383611143565b505050565b61089782826112c5565b806000036108e0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109395780341015610935576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ca9190612513565b905081811015610a10576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105f4565b610897833330856113ef565b600073ffffffffffffffffffffffffffffffffffffffff821615610acd576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610aa4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac89190612513565b610acf565b475b92915050565b60608160008167ffffffffffffffff811115610af357610af3611ec3565b604051908082528060200260200182016040528015610b1c578160200160208202803683370190505b5090506000805b83811015610bd657868682818110610b3d57610b3d612240565b9050602002810190610b4f919061226f565b610b609060808101906060016122ad565b9150610b6b82610a1c565b838281518110610b7d57610b7d612240565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bce5734838281518110610bb657610bb6612240565b60200260200101818151610bca9190612206565b9052505b600101610b23565b509095945050505050565b60005b818110156108975736838383818110610bff57610bff612240565b9050602002810190610c11919061226f565b9050610c2360e0820160c083016122cf565b15610c4557610c45610c3b60608301604084016122ad565b82608001356108a6565b50600101610be4565b838383838260018114610f1b5760008585610c6a600185612206565b818110610c7957610c79612240565b9050602002810190610c8b919061226f565b610c9c9060808101906060016122ad565b9050600089815b81811015610e4757368d8d83818110610cbe57610cbe612240565b9050602002810190610cd0919061226f565b9050610cff610ce560608301604084016122ad565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d625750610d62610d1860408301602084016122ad565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d795750610d79610d1860208301836122ad565b8015610dfe5750610dfe610d9060a083018361252c565b610d9f91600491600091612598565b610da8916125c2565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e34576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e3e8f82611609565b50600101610ca3565b505060005b610e57600185612206565b811015610f13576000888883818110610e7257610e72612240565b9050602002810190610e84919061226f565b610e959060808101906060016122ad565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f0a57858281518110610edc57610edc612240565b6020026020010151610eed82610a1c565b610ef79190612206565b92508215610f0a57610f0a818885610870565b50600101610e4c565b505050610ff4565b8760005b81811015610ff157368b8b83818110610f3a57610f3a612240565b9050602002810190610f4c919061226f565b9050610f61610ce560608301604084016122ad565b80610f7a5750610f7a610d1860408301602084016122ad565b8015610f915750610f91610d1860208301836122ad565b8015610fa85750610fa8610d9060a083018361252c565b610fde576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fe88d82611609565b50600101610f1f565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661102057505050565b73ffffffffffffffffffffffffffffffffffffffff821661106d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156110e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111069190612513565b101561089757611118838360006118e7565b61089783837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118e7565b73ffffffffffffffffffffffffffffffffffffffff8316611190576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111dd576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561124a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126e9190612513565b9050808211156112b4576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105f4565b6112bf848484611ae7565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611312576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611355576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105f4565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146113af576040519150601f19603f3d011682016040523d82523d6000602084013e6113b4565b606091505b5050905080610897576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661143c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611489576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156114fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151e9190612513565b905061152c82868686611b3d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561159c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c09190612513565b6115ca9190612206565b14611601576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61161f61161960208301836122ad565b3b151590565b611655576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611695576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006116aa610ce560608501604086016122ad565b6116b55760006116bb565b82608001355b905060006116d76116d260608601604087016122ad565b610a1c565b905060006116ee6116d260808701606088016122ad565b9050826000036117255761172561170b60608701604088016122ad565b61171b60408801602089016122ad565b8760800135611000565b8460800135821015611770576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105f4565b60008061178060208801886122ad565b73ffffffffffffffffffffffffffffffffffffffff16856117a460a08a018a61252c565b6040516117b292919061260a565b60006040518083038185875af1925050503d80600081146117ef576040519150601f19603f3d011682016040523d82523d6000602084013e6117f4565b606091505b5091509150816118075761180781611b9b565b600061181c6116d260808a0160608b016122ad565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961184d60208b018b6122ad565b61185d60608c0160408d016122ad565b61186d60808d0160608e016122ad565b8c6080013589871161187f5786611889565b6118898a88612206565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b80158061198757506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611961573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119859190612513565b155b611a13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016105f4565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108979084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611ba5565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108979084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a65565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112bf9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a65565b8051602082018181fd5b6000611c07826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cb49092919063ffffffff16565b9050805160001480611c28575080806020019051810190611c28919061261a565b610897576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105f4565b6060611cc38484600085611ccb565b949350505050565b606082471015611d5d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105f4565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d869190612637565b60006040518083038185875af1925050503d8060008114611dc3576040519150601f19603f3d011682016040523d82523d6000602084013e611dc8565b606091505b5091509150611dd987838387611de4565b979650505050505050565b60608315611e7a578251600003611e735773ffffffffffffffffffffffffffffffffffffffff85163b611e73576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105f4565b5081611cc3565b611cc38383815115611e8f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f49190612649565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f1657611f16611ec3565b60405290565b600082601f830112611f2d57600080fd5b813567ffffffffffffffff80821115611f4857611f48611ec3565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f8e57611f8e611ec3565b81604052838152866020858801011115611fa757600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611feb57600080fd5b919050565b8015158114611ffe57600080fd5b50565b8035611feb81611ff0565b6000610140828403121561201f57600080fd5b612027611ef2565b905081358152602082013567ffffffffffffffff8082111561204857600080fd5b61205485838601611f1c565b6020840152604084013591508082111561206d57600080fd5b5061207a84828501611f1c565b60408301525061208c60608301611fc7565b606082015261209d60808301611fc7565b60808201526120ae60a08301611fc7565b60a082015260c082013560c082015260e082013560e08201526101006120d5818401612001565b908201526101206120e7838201612001565b9082015292915050565b600060e0828403121561210357600080fd5b50919050565b600080600080610120858703121561212057600080fd5b843567ffffffffffffffff8082111561213857600080fd5b6121448883890161200c565b9550602087013591508082111561215a57600080fd5b818701915087601f83011261216e57600080fd5b81358181111561217d57600080fd5b8860208260051b850101111561219257600080fd5b6020830195508094505050506121ab86604087016120f1565b905092959194509250565b60008061010083850312156121ca57600080fd5b823567ffffffffffffffff8111156121e157600080fd5b6121ed8582860161200c565b9250506121fd84602085016120f1565b90509250929050565b81810381811115610acf577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122a357600080fd5b9190910192915050565b6000602082840312156122bf57600080fd5b6122c882611fc7565b9392505050565b6000602082840312156122e157600080fd5b81356122c881611ff0565b6000602082840312156122fe57600080fd5b8135600481106122c857600080fd5b60048110612344577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b6000610100820190508982528860208301528760408301528660608301528560808301528460a083015261237f60c083018561230d565b8260e08301529998505050505050505050565b60005b838110156123ad578181015183820152602001612395565b50506000910152565b600081518084526123ce816020860160208601612392565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124296101608501836123b6565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261246483826123b6565b925050606085015161248e608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125018187018315159052565b90950151151593019290925250919050565b60006020828403121561252557600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261256157600080fd5b83018035915067ffffffffffffffff82111561257c57600080fd5b60200191503681900382131561259157600080fd5b9250929050565b600080858511156125a857600080fd5b838611156125b557600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126025780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561262c57600080fd5b81516122c881611ff0565b600082516122a3818460208701612392565b6020815260006122c860208301846123b656fea264697066735822122064a7bcc868f76f0d73fc4e9d78ac24947dbdb24f486a93ff23336acc71f0771164736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_allBridge";
            readonly type: "address";
            readonly internalType: "contract IAllBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "bla";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): AllBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AllBridgeFacet;
}
export {};
