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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161213f38038061213f83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516120876100b85f395f8181605d01528181610768015261096601526120875ff3fe608060405260043610610033575f3560e01c80630aaf0b8f146100375780631fe5bb311461004c5780633f05ac09146100a8575b5f5ffd5b61004a61004536600461198f565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b6366004611a55565b6102e8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611aba565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab8a5f01518b60c001518b8b33610508565b60c08b01526102ba8a8861064a565b5047915050818111156102db576102db5f846102d68585611aba565b610aa8565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610363576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103733447611aba565b9050846103988160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103cf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361040c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610449576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610487576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104c5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104d788608001518960c00151610add565b6104e1888861064a565b5047915050818111156104fd576104fd5f846102d68585611aba565b50505f909155505050565b5f82808203610543576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610551600185611aba565b81811061056057610560611af2565b90506020028101906105729190611b1f565b610583906080810190606001611b5b565b90505f61058f82610b91565b905073ffffffffffffffffffffffffffffffffffffffff82166105b9576105b63482611aba565b90505b5f6105c48888610bdb565b90506105d08888610ce5565b6105dd8a89898985610d51565b5f826105e885610b91565b6105f29190611aba565b90508981101561063c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516106799190611bc7565b60405180910390a1608082015173ffffffffffffffffffffffffffffffffffffffff166106d2576040517f0a7287b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff1661070b823573ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610758576040517ff7f5e24b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c0820151608083015161078d907f000000000000000000000000000000000000000000000000000000000000000083610f08565b6040805160018082528183019092525f91816020015b6107ab61173b565b8152602001906001900390816107a35790505090506040518060400160405280856080015173ffffffffffffffffffffffffffffffffffffffff16815260200183815250815f8151811061080157610801611af2565b60209081029190910101526040805160018082528183019092525f91816020015b6108646040518061010001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f815260200160608152602001606081525090565b81526020019060019003908161082257505060408051610100808201835260c080890135835260e0808a013560208501528a01519383019390935287013560608201526101208701356080820152863560a082015291925081016108cc610140870187611cda565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250602001610913610160870187611cda565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920182905250939094525050835184925061095957610959611af2565b60200260200101819052507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637515fd566040518061010001604052808760200160208101906109bf9190611b5b565b73ffffffffffffffffffffffffffffffffffffffff168152602001876040013581526020014681526020018760600160208101906109fd9190611d42565b63ffffffff168152602001610a1860a0890160808a01611d42565b63ffffffff168152602001610a3360c0890160a08a01611b5b565b73ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152506040518263ffffffff1660e01b8152600401610a749190611ea3565b5f604051808303815f87803b158015610a8b575f5ffd5b505af1158015610a9d573d5f5f3e3d5ffd5b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ad257610acd8282610f34565b505050565b610acd838383610fa1565b805f03610b16576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b6f5780341015610b6b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610b6b73ffffffffffffffffffffffffffffffffffffffff831633308461100f565b5f73ffffffffffffffffffffffffffffffffffffffff821615610bd357610bce73ffffffffffffffffffffffffffffffffffffffff831630611067565b610bd5565b475b92915050565b6060815f8167ffffffffffffffff811115610bf857610bf8611759565b604051908082528060200260200182016040528015610c21578160200160208202803683370190505b5090505f5f5b83811015610cda57868682818110610c4157610c41611af2565b9050602002810190610c539190611b1f565b610c64906080810190606001611b5b565b9150610c6f82610b91565b838281518110610c8157610c81611af2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cd25734838281518110610cba57610cba611af2565b60200260200101818151610cce9190611aba565b9052505b600101610c27565b509095945050505050565b5f5b81811015610acd5736838383818110610d0257610d02611af2565b9050602002810190610d149190611b1f565b9050610d2660e0820160c08301611f85565b15610d4857610d48610d3e6060830160408401611b5b565b8260800135610add565b50600101610ce7565b83838383825f5b81811015610ef957368a8a83818110610d7357610d73611af2565b9050602002810190610d859190611b1f565b9050610db4610d9a6060830160408401611b5b565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e165750610e16610dcd6040830160208401611b5b565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e2d5750610e2d610dcd6020830183611b5b565b8015610eb05750610eb0610e4460a0830183611cda565b610e52916004915f91611f9e565b610e5b91611fc5565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ee6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ef08c8261109a565b50600101610d58565b5050610a9d848484845f61130d565b610acd8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611524565b73ffffffffffffffffffffffffffffffffffffffff8216610f81576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b6b73ffffffffffffffffffffffffffffffffffffffff831682611651565b73ffffffffffffffffffffffffffffffffffffffff8216610fee576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610acd73ffffffffffffffffffffffffffffffffffffffff8416838361166a565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661105a57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6110b26110aa6020830183611b5b565b6017903b1190565b6110e8576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611127576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61113b610d9a6060850160408601611b5b565b611145575f61114b565b82608001355b90505f6111666111616080860160608701611b5b565b610b91565b9050815f0361119c5761119c6111826060860160408701611b5b565b6111926040870160208801611b5b565b8660800135610f08565b5f806111ab6020870187611b5b565b73ffffffffffffffffffffffffffffffffffffffff16846111cf60a0890189611cda565b6040516111dd92919061202b565b5f6040518083038185875af1925050503d805f8114611217576040519150601f19603f3d011682016040523d82523d5f602084013e61121c565b606091505b50915091508161122f5761122f816116b3565b5f6112436111616080890160608a01611b5b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861127460208a018a611b5b565b61128460608b0160408c01611b5b565b61129460808c0160608d01611b5b565b8b608001358987116112a657866112b0565b6112b08a88611aba565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261131c600182611aba565b81811061132b5761132b611af2565b905060200281019061133d9190611b1f565b61134e906080810190606001611b5b565b90505f5f5f5f5f5f5f5b888110156115145761136b60018a611aba565b8110801561137a575088600114155b15611455578d8d8281811061139157611391611af2565b90506020028101906113a39190611b1f565b6113b4906080810190606001611b5b565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611455578a81815181106113fb576113fb611af2565b602002602001015161140c87610b91565b6114169190611aba565b965073ffffffffffffffffffffffffffffffffffffffff86161561143a575f61143c565b895b93508387111561145557611455868d6102d6878b611aba565b8d8d8281811061146757611467611af2565b90506020028101906114799190611b1f565b61148a906060810190604001611b5b565b945061149585610b91565b925073ffffffffffffffffffffffffffffffffffffffff8516156114b9575f6114bb565b895b915081831180156114f857508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561150c5761150c858d6102d68587611aba565b600101611358565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561164b5773ffffffffffffffffffffffffffffffffffffffff831661158d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611600573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611624919061203a565b101561164b5761164b73ffffffffffffffffffffffffffffffffffffffff851684836116bd565b50505050565b5f385f3884865af1610b6b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166116aa576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166116aa575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166116aa57633e3f8f735f526004601cfd5b60405180604001604052806002906020820280368337509192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156117aa576117aa611759565b60405290565b5f82601f8301126117bf575f5ffd5b813567ffffffffffffffff8111156117d9576117d9611759565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561182657611826611759565b60405281815283820160200185101561183d575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461187c575f5ffd5b919050565b8035801515811461187c575f5ffd5b5f61014082840312156118a1575f5ffd5b6118a9611786565b823581529050602082013567ffffffffffffffff8111156118c8575f5ffd5b6118d4848285016117b0565b602083015250604082013567ffffffffffffffff8111156118f3575f5ffd5b6118ff848285016117b0565b60408301525061191160608301611859565b606082015261192260808301611859565b608082015261193360a08301611859565b60a082015260c0828101359082015260e080830135908201526119596101008301611881565b61010082015261196c6101208301611881565b61012082015292915050565b5f6101808284031215611989575f5ffd5b50919050565b5f5f5f5f606085870312156119a2575f5ffd5b843567ffffffffffffffff8111156119b8575f5ffd5b6119c487828801611890565b945050602085013567ffffffffffffffff8111156119e0575f5ffd5b8501601f810187136119f0575f5ffd5b803567ffffffffffffffff811115611a06575f5ffd5b8760208260051b8401011115611a1a575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611a3d575f5ffd5b611a4987828801611978565b91505092959194509250565b5f5f60408385031215611a66575f5ffd5b823567ffffffffffffffff811115611a7c575f5ffd5b611a8885828601611890565b925050602083013567ffffffffffffffff811115611aa4575f5ffd5b611ab085828601611978565b9150509250929050565b81810381811115610bd5577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b51575f5ffd5b9190910192915050565b5f60208284031215611b6b575f5ffd5b611b7482611859565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611bee610160840182611b7b565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611c298282611b7b565b9150506060840151611c53608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611cc261012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611d0d575f5ffd5b83018035915067ffffffffffffffff821115611d27575f5ffd5b602001915036819003821315611d3b575f5ffd5b9250929050565b5f60208284031215611d52575f5ffd5b813563ffffffff81168114611b74575f5ffd5b5f8151808452602084019350602083015f5b82811015611dbc578151865f5b6002811015611da3578251825260209283019290910190600101611d84565b5050506040959095019460209190910190600101611d77565b5093949350505050565b5f82825180855260208501945060208160051b830101602085015f5b83811015611e97577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030188528151805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161010060c0860152611e64610100860182611b7b565b905060e0820151915084810360e0860152611e7f8183611b7b565b60209a8b019a90955093909301925050600101611de2565b50909695505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff825116602082015260208201516040820152604082015160608201525f6060830151611ef0608084018263ffffffff169052565b50608083015163ffffffff811660a08401525060a083015173ffffffffffffffffffffffffffffffffffffffff811660c08401525060c083015161010060e0840152611f40610120840182611d65565b905060e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301610100850152611f7c8282611dc6565b95945050505050565b5f60208284031215611f95575f5ffd5b611b7482611881565b5f5f85851115611fac575f5ffd5b83861115611fb8575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612024577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561204a575f5ffd5b505191905056fea2646970667358221220339827477e0b4674ab90dab8f5bbed0e3e3b3dffa5b8183b910e621e2a82444964736f6c634300081d0033";
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
        readonly name: "startBridgeTokensViaLIFIIntentEscrow";
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
            readonly internalType: "struct LiFiIntentEscrowFacet.LIFIIntentEscrowData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "user";
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
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaLIFIIntentEscrow";
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
            readonly internalType: "struct LiFiIntentEscrowFacet.LIFIIntentEscrowData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "user";
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
        readonly name: "NativeNotSupported";
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
        readonly name: "ReceiverDoesNotMatch";
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
