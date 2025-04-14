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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b5060405161263d38038061263d833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b6080516125b86100855f395f81816107c2015261083201526125b85ff3fe608060405260043610610028575f3560e01c806302cba4a31461002c578063a9d0550f1461004d575b5f5ffd5b348015610037575f5ffd5b5061004b61004636600461211c565b610060565b005b61004b61005b36600461214e565b610332565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100db576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561010082015182901561011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8361017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84606467ffffffffffffffff16808260e001511461027a576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102f9576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031b736b175474e89094c44da98b954eedeac495271d0f8a60c0015161062c565b610324896107a8565b50505f909555505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103ad576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103bd34476121e9565b9050858061010001516103fc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561043a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761045d8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610494576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104d1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361050e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88606467ffffffffffffffff16808260e0015114610558576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146105d7576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105eb8d5f01518e60c001518e8e336108ed565b60c08e01526105f98d6107a8565b505050505050505f47905081811115610620576106205f8461061b85856121e9565b610a2b565b50505f90915550505050565b805f03610665576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106be57803410156106ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610728573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061074c9190612221565b905081811015610797576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6107a383333085610a5c565b505050565b6107eb736b175474e89094c44da98b954eedeac495271d0f7f00000000000000000000000000000000000000000000000000000000000000008360c00151610c71565b60a081015160c08201516040517f01e4f53a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016926301e4f53a926108869260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b5f604051808303815f87803b15801561089d575f5ffd5b505af11580156108af573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516108e29190612284565b60405180910390a150565b5f82808203610928576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856109366001856121e9565b81811061094557610945612397565b905060200281019061095791906123c4565b610968906080810190606001612400565b90505f61097482610da6565b905073ffffffffffffffffffffffffffffffffffffffff821661099e5761099b34826121e9565b90505b5f6109a98888610e5c565b90506109b58888610f66565b6109c28a89898985610fd2565b5f826109cd85610da6565b6109d791906121e9565b905089811015610a1d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161078e565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a52576107a383838361137d565b6107a382826114fc565b73ffffffffffffffffffffffffffffffffffffffff8416610aa9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610af6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015610b64573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b889190612221565b9050610b9682868686611622565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610c04573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c289190612221565b610c3291906121e9565b14610c69576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c9157505050565b73ffffffffffffffffffffffffffffffffffffffff8216610cde576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d51573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d759190612221565b10156107a3576107a383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116fe565b5f73ffffffffffffffffffffffffffffffffffffffff821615610e54576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610e2b573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e4f9190612221565b610e56565b475b92915050565b6060815f8167ffffffffffffffff811115610e7957610e79611ef1565b604051908082528060200260200182016040528015610ea2578160200160208202803683370190505b5090505f805b83811015610f5b57868682818110610ec257610ec2612397565b9050602002810190610ed491906123c4565b610ee5906080810190606001612400565b9150610ef082610da6565b838281518110610f0257610f02612397565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f535734838281518110610f3b57610f3b612397565b60200260200101818151610f4f91906121e9565b9052505b600101610ea8565b509095945050505050565b5f5b818110156107a35736838383818110610f8357610f83612397565b9050602002810190610f9591906123c4565b9050610fa760e0820160c08301612420565b15610fc957610fc9610fbf6060830160408401612400565b826080013561062c565b50600101610f68565b838383838260018114611299575f8585610fed6001856121e9565b818110610ffc57610ffc612397565b905060200281019061100e91906123c4565b61101f906080810190606001612400565b90505f89815b818110156111c657368d8d8381811061104057611040612397565b905060200281019061105291906123c4565b90506110816110676060830160408401612400565b73ffffffffffffffffffffffffffffffffffffffff161590565b806110e357506110e361109a6040830160208401612400565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156110fa57506110fa61109a6020830183612400565b801561117d575061117d61111160a083018361243b565b61111f916004915f916124a3565b611128916124ca565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6111b3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111bd8f826117ed565b50600101611025565b505f90505b6111d66001856121e9565b811015611291575f8888838181106111f0576111f0612397565b905060200281019061120291906123c4565b611213906080810190606001612400565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146112885785828151811061125a5761125a612397565b602002602001015161126b82610da6565b61127591906121e9565b9250821561128857611288818885610a2b565b506001016111cb565b505050611371565b875f5b8181101561136e57368b8b838181106112b7576112b7612397565b90506020028101906112c991906123c4565b90506112de6110676060830160408401612400565b806112f757506112f761109a6040830160208401612400565b801561130e575061130e61109a6020830183612400565b8015611325575061132561111160a083018361243b565b61135b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113658d826117ed565b5060010161129c565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166113ca576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611417576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611481573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114a59190612221565b9050808211156114eb576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161078e565b6114f6848484611ac0565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611549576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561158c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161078e565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146115e2576040519150601f19603f3d011682016040523d82523d5f602084013e6115e7565b606091505b50509050806107a3576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114f69085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b16565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905261178a8482611c23565b6114f65760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f60448201526117e39085907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161167c565b6114f68482611b16565b6118036117fd6020830183612400565b3b151590565b611839576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611878576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61188c6110676060850160408601612400565b611896575f61189c565b82608001355b90505f6118b76118b26060860160408701612400565b610da6565b90505f6118cd6118b26080870160608801612400565b9050825f03611903576119036118e96060870160408801612400565b6118f96040880160208901612400565b8760800135610c71565b846080013582101561194e576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161078e565b5f8061195d6020880188612400565b73ffffffffffffffffffffffffffffffffffffffff168561198160a08a018a61243b565b60405161198f929190612530565b5f6040518083038185875af1925050503d805f81146119c9576040519150601f19603f3d011682016040523d82523d5f602084013e6119ce565b606091505b5091509150816119e1576119e181611cde565b5f6119f56118b260808a0160608b01612400565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a2660208b018b612400565b611a3660608c0160408d01612400565b611a4660808d0160608e01612400565b8c60800135898711611a585786611a62565b611a628a886121e9565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107a39084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161167c565b5f611b77826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ce89092919063ffffffff16565b905080515f1480611b97575080806020019051810190611b97919061253f565b6107a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161078e565b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff1684604051611c4b919061255a565b5f604051808303815f865af19150503d805f8114611c84576040519150601f19603f3d011682016040523d82523d5f602084013e611c89565b606091505b5091509150818015611cb3575080511580611cb3575080806020019051810190611cb3919061253f565b8015611cd5575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611cf684845f85611cfe565b949350505050565b606082471015611d90576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161078e565b5f5f8673ffffffffffffffffffffffffffffffffffffffff168587604051611db8919061255a565b5f6040518083038185875af1925050503d805f8114611df2576040519150601f19603f3d011682016040523d82523d5f602084013e611df7565b606091505b5091509150611e0887838387611e13565b979650505050505050565b60608315611ea85782515f03611ea15773ffffffffffffffffffffffffffffffffffffffff85163b611ea1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161078e565b5081611cf6565b611cf68383815115611ebd5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078e9190612570565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611f4257611f42611ef1565b60405290565b5f82601f830112611f57575f5ffd5b813567ffffffffffffffff811115611f7157611f71611ef1565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611fbe57611fbe611ef1565b604052818152838201602001851015611fd5575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612014575f5ffd5b919050565b8015158114612026575f5ffd5b50565b803561201481612019565b5f6101408284031215612045575f5ffd5b61204d611f1e565b823581529050602082013567ffffffffffffffff81111561206c575f5ffd5b61207884828501611f48565b602083015250604082013567ffffffffffffffff811115612097575f5ffd5b6120a384828501611f48565b6040830152506120b560608301611ff1565b60608201526120c660808301611ff1565b60808201526120d760a08301611ff1565b60a082015260c0828101359082015260e080830135908201526120fd6101008301612029565b6101008201526121106101208301612029565b61012082015292915050565b5f6020828403121561212c575f5ffd5b813567ffffffffffffffff811115612142575f5ffd5b611cf684828501612034565b5f5f5f60408486031215612160575f5ffd5b833567ffffffffffffffff811115612176575f5ffd5b61218286828701612034565b935050602084013567ffffffffffffffff81111561219e575f5ffd5b8401601f810186136121ae575f5ffd5b803567ffffffffffffffff8111156121c4575f5ffd5b8660208260051b84010111156121d8575f5ffd5b939660209190910195509293505050565b81810381811115610e56577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215612231575f5ffd5b5051919050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526122ab610160840182612238565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526122e68282612238565b9150506060840151612310608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161237f61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123f6575f5ffd5b9190910192915050565b5f60208284031215612410575f5ffd5b61241982611ff1565b9392505050565b5f60208284031215612430575f5ffd5b813561241981612019565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261246e575f5ffd5b83018035915067ffffffffffffffff821115612488575f5ffd5b60200191503681900382131561249c575f5ffd5b9250929050565b5f5f858511156124b1575f5ffd5b838611156124bd575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612529577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561254f575f5ffd5b815161241981612019565b5f82518060208501845e5f920191825250919050565b602081525f612419602083018461223856fea264697066735822122057fb84b185bc149014859a8a2affc749d39397cdc293a4ef63a248eef2b06e9664736f6c634300081d0033";
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
