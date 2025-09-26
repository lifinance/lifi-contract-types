import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LIFIIntentEscrowFacet, LIFIIntentEscrowFacetInterface } from "../LIFIIntentEscrowFacet";
type LIFIIntentEscrowFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LIFIIntentEscrowFacet__factory extends ContractFactory {
    constructor(...args: LIFIIntentEscrowFacetConstructorParams);
    deploy(inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LIFIIntentEscrowFacet>;
    getDeployTransaction(inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LIFIIntentEscrowFacet;
    connect(signer: Signer): LIFIIntentEscrowFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161214a38038061214a83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516120926100b85f395f8181605d01528181610731015261092f01526120925ff3fe608060405260043610610033575f3560e01c80630aaf0b8f146100375780631fe5bb311461004c5780633f05ac09146100a8575b5f5ffd5b61004a61004536600461199a565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b6366004611a60565b6102e8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611ac5565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab8a5f01518b60c001518b8b33610508565b60c08b01526102ba8a8861064a565b5047915050818111156102db576102db5f846102d68585611ac5565b610aa8565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610363576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103733447611ac5565b9050846103988160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103cf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361040c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610449576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610487576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104c5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104d788608001518960c00151610add565b6104e1888861064a565b5047915050818111156104fd576104fd5f846102d68585611ac5565b50505f909155505050565b5f82808203610543576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610551600185611ac5565b81811061056057610560611afd565b90506020028101906105729190611b2a565b610583906080810190606001611b66565b90505f61058f82610b91565b905073ffffffffffffffffffffffffffffffffffffffff82166105b9576105b63482611ac5565b90505b5f6105c48888610bdb565b90506105d08888610ce5565b6105dd8a89898985610d51565b5f826105e885610b91565b6105f29190611ac5565b90508981101561063c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff1661069b576040517f0a7287b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff166106d4823573ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610721576040517f97080cae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516080830151610756907f000000000000000000000000000000000000000000000000000000000000000083610f13565b6040805160018082528183019092525f91816020015b610774611746565b81526020019060019003908161076c5790505090506040518060400160405280856080015173ffffffffffffffffffffffffffffffffffffffff16815260200183815250815f815181106107ca576107ca611afd565b60209081029190910101526040805160018082528183019092525f91816020015b61082d6040518061010001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f815260200160608152602001606081525090565b8152602001906001900390816107eb57505060408051610100808201835260c080890135835260e0808a013560208501528a01519383019390935287013560608201526101208701356080820152863560a08201529192508101610895610140870187611b86565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506020016108dc610160870187611b86565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920182905250939094525050835184925061092257610922611afd565b60200260200101819052507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637515fd566040518061010001604052808760200160208101906109889190611b66565b73ffffffffffffffffffffffffffffffffffffffff168152602001876040013581526020014681526020018760600160208101906109c69190611bee565b63ffffffff1681526020016109e160a0890160808a01611bee565b63ffffffff1681526020016109fc60c0890160a08a01611b66565b73ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152506040518263ffffffff1660e01b8152600401610a3d9190611d9b565b5f604051808303815f87803b158015610a54575f5ffd5b505af1158015610a66573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610a999190611e7d565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ad257610acd8282610f3f565b505050565b610acd838383610fac565b805f03610b16576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b6f5780341015610b6b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610b6b73ffffffffffffffffffffffffffffffffffffffff831633308461101a565b5f73ffffffffffffffffffffffffffffffffffffffff821615610bd357610bce73ffffffffffffffffffffffffffffffffffffffff831630611072565b610bd5565b475b92915050565b6060815f8167ffffffffffffffff811115610bf857610bf8611764565b604051908082528060200260200182016040528015610c21578160200160208202803683370190505b5090505f5f5b83811015610cda57868682818110610c4157610c41611afd565b9050602002810190610c539190611b2a565b610c64906080810190606001611b66565b9150610c6f82610b91565b838281518110610c8157610c81611afd565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cd25734838281518110610cba57610cba611afd565b60200260200101818151610cce9190611ac5565b9052505b600101610c27565b509095945050505050565b5f5b81811015610acd5736838383818110610d0257610d02611afd565b9050602002810190610d149190611b2a565b9050610d2660e0820160c08301611f90565b15610d4857610d48610d3e6060830160408401611b66565b8260800135610add565b50600101610ce7565b83838383825f5b81811015610ef957368a8a83818110610d7357610d73611afd565b9050602002810190610d859190611b2a565b9050610db4610d9a6060830160408401611b66565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e165750610e16610dcd6040830160208401611b66565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e2d5750610e2d610dcd6020830183611b66565b8015610eb05750610eb0610e4460a0830183611b86565b610e52916004915f91611fa9565b610e5b91611fd0565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ee6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ef08c826110a5565b50600101610d58565b5050610f08848484845f611318565b505050505050505050565b610acd8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61152f565b73ffffffffffffffffffffffffffffffffffffffff8216610f8c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b6b73ffffffffffffffffffffffffffffffffffffffff83168261165c565b73ffffffffffffffffffffffffffffffffffffffff8216610ff9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610acd73ffffffffffffffffffffffffffffffffffffffff84168383611675565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661106557637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6110bd6110b56020830183611b66565b6017903b1190565b6110f3576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611132576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611146610d9a6060850160408601611b66565b611150575f611156565b82608001355b90505f61117161116c6080860160608701611b66565b610b91565b9050815f036111a7576111a761118d6060860160408701611b66565b61119d6040870160208801611b66565b8660800135610f13565b5f806111b66020870187611b66565b73ffffffffffffffffffffffffffffffffffffffff16846111da60a0890189611b86565b6040516111e8929190612036565b5f6040518083038185875af1925050503d805f8114611222576040519150601f19603f3d011682016040523d82523d5f602084013e611227565b606091505b50915091508161123a5761123a816116be565b5f61124e61116c6080890160608a01611b66565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861127f60208a018a611b66565b61128f60608b0160408c01611b66565b61129f60808c0160608d01611b66565b8b608001358987116112b157866112bb565b6112bb8a88611ac5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611327600182611ac5565b81811061133657611336611afd565b90506020028101906113489190611b2a565b611359906080810190606001611b66565b90505f5f5f5f5f5f5f5b8881101561151f5761137660018a611ac5565b81108015611385575088600114155b15611460578d8d8281811061139c5761139c611afd565b90506020028101906113ae9190611b2a565b6113bf906080810190606001611b66565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611460578a818151811061140657611406611afd565b602002602001015161141787610b91565b6114219190611ac5565b965073ffffffffffffffffffffffffffffffffffffffff861615611445575f611447565b895b93508387111561146057611460868d6102d6878b611ac5565b8d8d8281811061147257611472611afd565b90506020028101906114849190611b2a565b611495906060810190604001611b66565b94506114a085610b91565b925073ffffffffffffffffffffffffffffffffffffffff8516156114c4575f6114c6565b895b9150818311801561150357508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561151757611517858d6102d68587611ac5565b600101611363565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156116565773ffffffffffffffffffffffffffffffffffffffff8316611598576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561160b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061162f9190612045565b10156116565761165673ffffffffffffffffffffffffffffffffffffffff851684836116c8565b50505050565b5f385f3884865af1610b6b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166116b5576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166116b5575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166116b557633e3f8f735f526004601cfd5b60405180604001604052806002906020820280368337509192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156117b5576117b5611764565b60405290565b5f82601f8301126117ca575f5ffd5b813567ffffffffffffffff8111156117e4576117e4611764565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561183157611831611764565b604052818152838201602001851015611848575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611887575f5ffd5b919050565b80358015158114611887575f5ffd5b5f61014082840312156118ac575f5ffd5b6118b4611791565b823581529050602082013567ffffffffffffffff8111156118d3575f5ffd5b6118df848285016117bb565b602083015250604082013567ffffffffffffffff8111156118fe575f5ffd5b61190a848285016117bb565b60408301525061191c60608301611864565b606082015261192d60808301611864565b608082015261193e60a08301611864565b60a082015260c0828101359082015260e08083013590820152611964610100830161188c565b610100820152611977610120830161188c565b61012082015292915050565b5f6101808284031215611994575f5ffd5b50919050565b5f5f5f5f606085870312156119ad575f5ffd5b843567ffffffffffffffff8111156119c3575f5ffd5b6119cf8782880161189b565b945050602085013567ffffffffffffffff8111156119eb575f5ffd5b8501601f810187136119fb575f5ffd5b803567ffffffffffffffff811115611a11575f5ffd5b8760208260051b8401011115611a25575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611a48575f5ffd5b611a5487828801611983565b91505092959194509250565b5f5f60408385031215611a71575f5ffd5b823567ffffffffffffffff811115611a87575f5ffd5b611a938582860161189b565b925050602083013567ffffffffffffffff811115611aaf575f5ffd5b611abb85828601611983565b9150509250929050565b81810381811115610bd5577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b5c575f5ffd5b9190910192915050565b5f60208284031215611b76575f5ffd5b611b7f82611864565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611bb9575f5ffd5b83018035915067ffffffffffffffff821115611bd3575f5ffd5b602001915036819003821315611be7575f5ffd5b9250929050565b5f60208284031215611bfe575f5ffd5b813563ffffffff81168114611b7f575f5ffd5b5f8151808452602084019350602083015f5b82811015611c68578151865f5b6002811015611c4f578251825260209283019290910190600101611c30565b5050506040959095019460209190910190600101611c23565b5093949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f82825180855260208501945060208160051b830101602085015f5b83811015611d8f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030188528151805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161010060c0860152611d5c610100860182611c72565b905060e0820151915084810360e0860152611d778183611c72565b60209a8b019a90955093909301925050600101611cda565b50909695505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff825116602082015260208201516040820152604082015160608201525f6060830151611de8608084018263ffffffff169052565b50608083015163ffffffff811660a08401525060a083015173ffffffffffffffffffffffffffffffffffffffff811660c08401525060c083015161010060e0840152611e38610120840182611c11565b905060e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301610100850152611e748282611cbe565b95945050505050565b60208152815160208201525f60208301516101406040840152611ea4610160840182611c72565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611edf8282611c72565b9150506060840151611f09608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611f7861012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611fa0575f5ffd5b611b7f8261188c565b5f5f85851115611fb7575f5ffd5b83861115611fc3575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561202f577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612055575f5ffd5b505191905056fea2646970667358221220c6e25a6b74e6e7fd45f914a76f819eacfb772fc0c7e61059491db98df1b4f85c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "inputSettler";
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
            readonly internalType: "struct LIFIIntentEscrowFacet.LIFIIntentEscrowData";
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
            readonly internalType: "struct LIFIIntentEscrowFacet.LIFIIntentEscrowData";
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
        readonly name: "ReceiverDoNotMatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): LIFIIntentEscrowFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LIFIIntentEscrowFacet;
}
export {};
