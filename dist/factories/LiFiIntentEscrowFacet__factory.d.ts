import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiIntentEscrowFacet, LiFiIntentEscrowFacetInterface } from "../LiFiIntentEscrowFacet";
type LiFiIntentEscrowFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiIntentEscrowFacet__factory extends ContractFactory {
    constructor(...args: LiFiIntentEscrowFacetConstructorParams);
    deploy(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiIntentEscrowFacet>;
    getDeployTransaction(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiIntentEscrowFacet;
    connect(signer: Signer): LiFiIntentEscrowFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516122eb3803806122eb83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516122336100b85f395f818160480152818161086c0152610a6601526122335ff3fe608060405260043610610033575f3560e01c80631fe5bb31146100375780635627b1f31461009357806393057564146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a1366004611b3b565b6100c7565b005b3480156100b3575f5ffd5b506100a66100c2366004611c01565b61032d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080850151859073ffffffffffffffffffffffffffffffffffffffff16610199576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6101a53447611c66565b9050878061010001516101e4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561023e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361027b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102b8576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6102cd8b5f01518c60c001518c8c33610538565b90508a60c001518111156102f9576102f98b60800151338d60c00151846102f49190611c66565b61067a565b6103038b896106af565b50479150508181111561031f5761031f5f846102f48585611c66565b50505f909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103a8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080830151839073ffffffffffffffffffffffffffffffffffffffff166103ff576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836104228160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610459576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610496576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104d3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610100015115610511576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052386608001518760c00151610be1565b61052d86866106af565b50505f909155505050565b5f82808203610573576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610581600185611c66565b81811061059057610590611c9e565b90506020028101906105a29190611ccb565b6105b3906080810190606001611d07565b90505f6105bf82610c95565b905073ffffffffffffffffffffffffffffffffffffffff82166105e9576105e63482611c66565b90505b5f6105f48888610cdf565b90506106008888610de9565b61060d8a89898985610e55565b5f8261061885610c95565b6106229190611c66565b90508981101561066c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166106a45761069f82826110b4565b505050565b61069f838383611121565b61012082015115155f6106c6610140840184611d27565b905011151514610702576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff81167311f111f111f111f111f111f111f111f111f111f11461078857813573ffffffffffffffffffffffffffffffffffffffff821614610788576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107996040840160208501611d07565b73ffffffffffffffffffffffffffffffffffffffff16036107e6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b813561081e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001355f0361085c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015160c0840151610891827f00000000000000000000000000000000000000000000000000000000000000008361118f565b6040805160018082528183019092525f91816020015b6108af6118e7565b8152602001906001900390816108a757905050905060405180604001604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815250815f8151811061090157610901611c9e565b60209081029190910101526040805160018082528183019092525f91816020015b6109646040518061010001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f815260200160608152602001606081525090565b81526020019060019003908161092257505060408051610100808201835260c0808b0135835260e0808c013560208501528c01519383019390935289013560608201526101208901356080820152883560a082015291925081016109cc610140890189611d27565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250602001610a13610160890189611d27565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201829052509390945250508351849250610a5957610a59611c9e565b60200260200101819052507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637515fd56604051806101000160405280896020016020810190610abf9190611d07565b73ffffffffffffffffffffffffffffffffffffffff16815260200189604001358152602001468152602001896060016020810190610afd9190611d8f565b63ffffffff168152602001610b1860a08b0160808c01611d8f565b63ffffffff168152602001610b3360c08b0160a08c01611d07565b73ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152506040518263ffffffff1660e01b8152600401610b749190611f3c565b5f604051808303815f87803b158015610b8b575f5ffd5b505af1158015610b9d573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f187604051610bd0919061201e565b60405180910390a150505050505050565b805f03610c1a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c735780341015610c6f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610c6f73ffffffffffffffffffffffffffffffffffffffff83163330846111bb565b5f73ffffffffffffffffffffffffffffffffffffffff821615610cd757610cd273ffffffffffffffffffffffffffffffffffffffff831630611213565b610cd9565b475b92915050565b6060815f8167ffffffffffffffff811115610cfc57610cfc611905565b604051908082528060200260200182016040528015610d25578160200160208202803683370190505b5090505f5f5b83811015610dde57868682818110610d4557610d45611c9e565b9050602002810190610d579190611ccb565b610d68906080810190606001611d07565b9150610d7382610c95565b838281518110610d8557610d85611c9e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610dd65734838281518110610dbe57610dbe611c9e565b60200260200101818151610dd29190611c66565b9052505b600101610d2b565b509095945050505050565b5f5b8181101561069f5736838383818110610e0657610e06611c9e565b9050602002810190610e189190611ccb565b9050610e2a60e0820160c08301612131565b15610e4c57610e4c610e426060830160408401611d07565b8260800135610be1565b50600101610deb565b83838383825f5b8181101561109a57368a8a83818110610e7757610e77611c9e565b9050602002810190610e899190611ccb565b9050610f38610e9b6020830183611d07565b610ea860a0840184611d27565b610eb6916004915f9161214a565b610ebf91612171565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806110505750610f6c610f526060830160408401611d07565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610fc05750610f816020820182611d07565b73ffffffffffffffffffffffffffffffffffffffff16610fa76040830160208401611d07565b73ffffffffffffffffffffffffffffffffffffffff1614155b8015611050575061104e610fda6040830160208401611d07565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b15611087576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110918c82611246565b50600101610e5c565b50506110a9848484845f6114b9565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611101576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c6f73ffffffffffffffffffffffffffffffffffffffff8316826116d0565b73ffffffffffffffffffffffffffffffffffffffff821661116e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61069f73ffffffffffffffffffffffffffffffffffffffff841683836116e9565b61069f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611732565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661120657637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61125e6112566020830183611d07565b6017903b1190565b611294576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036112d3576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6112e7610f526060850160408601611d07565b6112f1575f6112f7565b82608001355b90505f61131261130d6080860160608701611d07565b610c95565b9050815f036113485761134861132e6060860160408701611d07565b61133e6040870160208801611d07565b866080013561118f565b5f806113576020870187611d07565b73ffffffffffffffffffffffffffffffffffffffff168461137b60a0890189611d27565b6040516113899291906121d7565b5f6040518083038185875af1925050503d805f81146113c3576040519150601f19603f3d011682016040523d82523d5f602084013e6113c8565b606091505b5091509150816113db576113db8161185f565b5f6113ef61130d6080890160608a01611d07565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861142060208a018a611d07565b61143060608b0160408c01611d07565b61144060808c0160608d01611d07565b8b60800135898711611452578661145c565b61145c8a88611c66565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826114c8600182611c66565b8181106114d7576114d7611c9e565b90506020028101906114e99190611ccb565b6114fa906080810190606001611d07565b90505f5f5f5f5f5f5f5b888110156116c05761151760018a611c66565b81108015611526575088600114155b15611601578d8d8281811061153d5761153d611c9e565b905060200281019061154f9190611ccb565b611560906080810190606001611d07565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611601578a81815181106115a7576115a7611c9e565b60200260200101516115b887610c95565b6115c29190611c66565b965073ffffffffffffffffffffffffffffffffffffffff8616156115e6575f6115e8565b895b93508387111561160157611601868d6102f4878b611c66565b8d8d8281811061161357611613611c9e565b90506020028101906116259190611ccb565b611636906060810190604001611d07565b945061164185610c95565b925073ffffffffffffffffffffffffffffffffffffffff851615611665575f611667565b895b915081831180156116a457508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156116b8576116b8858d6102f48587611c66565b600101611504565b5050505050505050505050505050565b5f385f3884865af1610c6f5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611729576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8416156118595773ffffffffffffffffffffffffffffffffffffffff831661179b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561180e573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061183291906121e6565b10156118595761185973ffffffffffffffffffffffffffffffffffffffff85168483611869565b50505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611729575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661172957633e3f8f735f526004601cfd5b60405180604001604052806002906020820280368337509192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561195657611956611905565b60405290565b5f82601f83011261196b575f5ffd5b813567ffffffffffffffff81111561198557611985611905565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156119d2576119d2611905565b6040528181528382016020018510156119e9575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611a28575f5ffd5b919050565b80358015158114611a28575f5ffd5b5f6101408284031215611a4d575f5ffd5b611a55611932565b823581529050602082013567ffffffffffffffff811115611a74575f5ffd5b611a808482850161195c565b602083015250604082013567ffffffffffffffff811115611a9f575f5ffd5b611aab8482850161195c565b604083015250611abd60608301611a05565b6060820152611ace60808301611a05565b6080820152611adf60a08301611a05565b60a082015260c0828101359082015260e08083013590820152611b056101008301611a2d565b610100820152611b186101208301611a2d565b61012082015292915050565b5f6101808284031215611b35575f5ffd5b50919050565b5f5f5f5f60608587031215611b4e575f5ffd5b843567ffffffffffffffff811115611b64575f5ffd5b611b7087828801611a3c565b945050602085013567ffffffffffffffff811115611b8c575f5ffd5b8501601f81018713611b9c575f5ffd5b803567ffffffffffffffff811115611bb2575f5ffd5b8760208260051b8401011115611bc6575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611be9575f5ffd5b611bf587828801611b24565b91505092959194509250565b5f5f60408385031215611c12575f5ffd5b823567ffffffffffffffff811115611c28575f5ffd5b611c3485828601611a3c565b925050602083013567ffffffffffffffff811115611c50575f5ffd5b611c5c85828601611b24565b9150509250929050565b81810381811115610cd9577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611cfd575f5ffd5b9190910192915050565b5f60208284031215611d17575f5ffd5b611d2082611a05565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611d5a575f5ffd5b83018035915067ffffffffffffffff821115611d74575f5ffd5b602001915036819003821315611d88575f5ffd5b9250929050565b5f60208284031215611d9f575f5ffd5b813563ffffffff81168114611d20575f5ffd5b5f8151808452602084019350602083015f5b82811015611e09578151865f5b6002811015611df0578251825260209283019290910190600101611dd1565b5050506040959095019460209190910190600101611dc4565b5093949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f82825180855260208501945060208160051b830101602085015f5b83811015611f30577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030188528151805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161010060c0860152611efd610100860182611e13565b905060e0820151915084810360e0860152611f188183611e13565b60209a8b019a90955093909301925050600101611e7b565b50909695505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff825116602082015260208201516040820152604082015160608201525f6060830151611f89608084018263ffffffff169052565b50608083015163ffffffff811660a08401525060a083015173ffffffffffffffffffffffffffffffffffffffff811660c08401525060c083015161010060e0840152611fd9610120840182611db2565b905060e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016101008501526120158282611e5f565b95945050505050565b60208152815160208201525f60208301516101406040840152612045610160840182611e13565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526120808282611e13565b91505060608401516120aa608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161211961012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612141575f5ffd5b611d2082611a2d565b5f5f85851115612158575f5ffd5b83861115612164575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156121d0577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f602082840312156121f6575f5ffd5b505191905056fea26469706673582212205172ea28791724fabe0f1f92270890bef10322d5222d0595ac28821dff8bbe2564736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_inputSettler";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LIFI_INTENT_ESCROW_SETTLER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaLiFiIntentEscrow";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacet.LiFiIntentEscrowData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputCall";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "outputContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaLiFiIntentEscrow";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacet.LiFiIntentEscrowData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputCall";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "outputContext";
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
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
        readonly name: "InvalidAmount";
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
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): LiFiIntentEscrowFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFiIntentEscrowFacet;
}
export {};
