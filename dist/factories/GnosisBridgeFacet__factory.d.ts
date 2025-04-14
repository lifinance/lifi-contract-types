import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GnosisBridgeFacet, GnosisBridgeFacetInterface } from "../GnosisBridgeFacet";
declare type GnosisBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GnosisBridgeFacet__factory extends ContractFactory {
    constructor(...args: GnosisBridgeFacetConstructorParams);
    deploy(_xDaiBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GnosisBridgeFacet>;
    getDeployTransaction(_xDaiBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GnosisBridgeFacet;
    connect(signer: Signer): GnosisBridgeFacet__factory;
    static readonly bytecode = "0x60a060405234801562000010575f80fd5b506040516200263438038062002634833981016040819052620000339162000045565b6001600160a01b031660805262000074565b5f6020828403121562000056575f80fd5b81516001600160a01b03811681146200006d575f80fd5b9392505050565b6080516125a0620000945f395f81816107c2015261083201526125a05ff3fe608060405260043610610028575f3560e01c806302cba4a31461002c578063a9d0550f1461004d575b5f80fd5b348015610037575f80fd5b5061004b610046366004612112565b610060565b005b61004b61005b366004612144565b610332565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100db576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561010082015182901561011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8361017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84606467ffffffffffffffff16808260e001511461027a576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102f9576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031b736b175474e89094c44da98b954eedeac495271d0f8a60c0015161062c565b610324896107a8565b50505f909555505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103ad576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103bd34476121d6565b9050858061010001516103fc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561043a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761045d8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610494576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104d1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361050e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88606467ffffffffffffffff16808260e0015114610558576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146105d7576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105eb8d5f01518e60c001518e8e336108ed565b60c08e01526105f98d6107a8565b505050505050505f47905081811115610620576106205f8461061b85856121d6565b610a2b565b50505f90915550505050565b805f03610665576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106be57803410156106ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610728573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061074c919061220e565b905081811015610797576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6107a383333085610a5c565b505050565b6107eb736b175474e89094c44da98b954eedeac495271d0f7f00000000000000000000000000000000000000000000000000000000000000008360c00151610c71565b60a081015160c08201516040517f01e4f53a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016926301e4f53a926108869260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b5f604051808303815f87803b15801561089d575f80fd5b505af11580156108af573d5f803e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516108e29190612290565b60405180910390a150565b5f82808203610928576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856109366001856121d6565b818110610945576109456123a2565b905060200281019061095791906123cf565b61096890608081019060600161240b565b90505f61097482610da6565b905073ffffffffffffffffffffffffffffffffffffffff821661099e5761099b34826121d6565b90505b5f6109a98888610e5c565b90506109b58888610f66565b6109c28a89898985610fd2565b5f826109cd85610da6565b6109d791906121d6565b905089811015610a1d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161078e565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a52576107a383838361137c565b6107a382826114fb565b73ffffffffffffffffffffffffffffffffffffffff8416610aa9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610af6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015610b64573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b88919061220e565b9050610b9682868686611621565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610c04573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c28919061220e565b610c3291906121d6565b14610c69576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c9157505050565b73ffffffffffffffffffffffffffffffffffffffff8216610cde576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d51573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d75919061220e565b10156107a3576107a383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116fd565b5f73ffffffffffffffffffffffffffffffffffffffff821615610e54576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610e2b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e4f919061220e565b610e56565b475b92915050565b6060815f8167ffffffffffffffff811115610e7957610e79611ef0565b604051908082528060200260200182016040528015610ea2578160200160208202803683370190505b5090505f805b83811015610f5b57868682818110610ec257610ec26123a2565b9050602002810190610ed491906123cf565b610ee590608081019060600161240b565b9150610ef082610da6565b838281518110610f0257610f026123a2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f535734838281518110610f3b57610f3b6123a2565b60200260200101818151610f4f91906121d6565b9052505b600101610ea8565b509095945050505050565b5f5b818110156107a35736838383818110610f8357610f836123a2565b9050602002810190610f9591906123cf565b9050610fa760e0820160c0830161242b565b15610fc957610fc9610fbf606083016040840161240b565b826080013561062c565b50600101610f68565b838383838260018114611298575f8585610fed6001856121d6565b818110610ffc57610ffc6123a2565b905060200281019061100e91906123cf565b61101f90608081019060600161240b565b90505f89815b818110156111c657368d8d83818110611040576110406123a2565b905060200281019061105291906123cf565b9050611081611067606083016040840161240b565b73ffffffffffffffffffffffffffffffffffffffff161590565b806110e357506110e361109a604083016020840161240b565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156110fa57506110fa61109a602083018361240b565b801561117d575061117d61111160a0830183612446565b61111f916004915f916124ae565b611128916124d5565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6111b3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111bd8f826117ec565b50600101611025565b50505f5b6111d56001856121d6565b811015611290575f8888838181106111ef576111ef6123a2565b905060200281019061120191906123cf565b61121290608081019060600161240b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461128757858281518110611259576112596123a2565b602002602001015161126a82610da6565b61127491906121d6565b9250821561128757611287818885610a2b565b506001016111ca565b505050611370565b875f5b8181101561136d57368b8b838181106112b6576112b66123a2565b90506020028101906112c891906123cf565b90506112dd611067606083016040840161240b565b806112f657506112f661109a604083016020840161240b565b801561130d575061130d61109a602083018361240b565b8015611324575061132461111160a0830183612446565b61135a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113648d826117ec565b5060010161129b565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166113c9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611416576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611480573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114a4919061220e565b9050808211156114ea576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161078e565b6114f5848484611abf565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611548576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561158b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161078e565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146115e1576040519150601f19603f3d011682016040523d82523d5f602084013e6115e6565b606091505b50509050806107a3576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114f59085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b15565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526117898482611c22565b6114f55760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f60448201526117e29085907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161167b565b6114f58482611b15565b6118026117fc602083018361240b565b3b151590565b611838576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611877576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61188b611067606085016040860161240b565b611895575f61189b565b82608001355b90505f6118b66118b1606086016040870161240b565b610da6565b90505f6118cc6118b1608087016060880161240b565b9050825f03611902576119026118e8606087016040880161240b565b6118f8604088016020890161240b565b8760800135610c71565b846080013582101561194d576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161078e565b5f8061195c602088018861240b565b73ffffffffffffffffffffffffffffffffffffffff168561198060a08a018a612446565b60405161198e92919061251d565b5f6040518083038185875af1925050503d805f81146119c8576040519150601f19603f3d011682016040523d82523d5f602084013e6119cd565b606091505b5091509150816119e0576119e081611cdd565b5f6119f46118b160808a0160608b0161240b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a2560208b018b61240b565b611a3560608c0160408d0161240b565b611a4560808d0160608e0161240b565b8c60800135898711611a575786611a61565b611a618a886121d6565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107a39084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161167b565b5f611b76826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ce79092919063ffffffff16565b905080515f1480611b96575080806020019051810190611b96919061252c565b6107a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161078e565b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611c4a9190612547565b5f604051808303815f865af19150503d805f8114611c83576040519150601f19603f3d011682016040523d82523d5f602084013e611c88565b606091505b5091509150818015611cb2575080511580611cb2575080806020019051810190611cb2919061252c565b8015611cd4575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611cf584845f85611cfd565b949350505050565b606082471015611d8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161078e565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611db79190612547565b5f6040518083038185875af1925050503d805f8114611df1576040519150601f19603f3d011682016040523d82523d5f602084013e611df6565b606091505b5091509150611e0787838387611e12565b979650505050505050565b60608315611ea75782515f03611ea05773ffffffffffffffffffffffffffffffffffffffff85163b611ea0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161078e565b5081611cf5565b611cf58383815115611ebc5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078e9190612558565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611f4157611f41611ef0565b60405290565b5f82601f830112611f56575f80fd5b813567ffffffffffffffff80821115611f7157611f71611ef0565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611fb757611fb7611ef0565b81604052838152866020858801011115611fcf575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612011575f80fd5b919050565b8015158114612023575f80fd5b50565b803561201181612016565b5f6101408284031215612042575f80fd5b61204a611f1d565b905081358152602082013567ffffffffffffffff8082111561206a575f80fd5b61207685838601611f47565b6020840152604084013591508082111561208e575f80fd5b5061209b84828501611f47565b6040830152506120ad60608301611fee565b60608201526120be60808301611fee565b60808201526120cf60a08301611fee565b60a082015260c082013560c082015260e082013560e08201526101006120f6818401612026565b90820152610120612108838201612026565b9082015292915050565b5f60208284031215612122575f80fd5b813567ffffffffffffffff811115612138575f80fd5b611cf584828501612031565b5f805f60408486031215612156575f80fd5b833567ffffffffffffffff8082111561216d575f80fd5b61217987838801612031565b9450602086013591508082111561218e575f80fd5b818601915086601f8301126121a1575f80fd5b8135818111156121af575f80fd5b8760208260051b85010111156121c3575f80fd5b6020830194508093505050509250925092565b81810381811115610e56577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6020828403121561221e575f80fd5b5051919050565b5f5b8381101561223f578181015183820152602001612227565b50505f910152565b5f815180845261225e816020860160208601612225565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201525f60208301516101408060408501526122b8610160850183612247565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526122f38382612247565b925050606085015161231d608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206123908187018315159052565b90950151151593019290925250919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612401575f80fd5b9190910192915050565b5f6020828403121561241b575f80fd5b61242482611fee565b9392505050565b5f6020828403121561243b575f80fd5b813561242481612016565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612479575f80fd5b83018035915067ffffffffffffffff821115612493575f80fd5b6020019150368190038213156124a7575f80fd5b9250929050565b5f80858511156124bc575f80fd5b838611156124c8575f80fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156125155780818660040360031b1b83161692505b505092915050565b818382375f9101908152919050565b5f6020828403121561253c575f80fd5b815161242481612016565b5f8251612401818460208701612225565b602081525f612424602083018461224756fea2646970667358221220217e22e7ca7c726edb93bba47393696aecedb31532207324d36c4fb4bb65c81d64736f6c63430008160033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_xDaiBridge";
            readonly type: "address";
            readonly internalType: "contract IXDaiBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaXDaiBridge";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaXDaiBridge";
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
        readonly name: "InvalidDestinationChain";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSendingToken";
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
    static createInterface(): GnosisBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GnosisBridgeFacet;
}
export {};
