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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161225a38038061225a83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516121a26100b85f395f81816048015281816107f201526109ec01526121a25ff3fe608060405260043610610033575f3560e01c80631fe5bb31146100375780635627b1f31461009357806393057564146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a1366004611aaa565b6100c7565b005b3480156100b3575f5ffd5b506100a66100c2366004611b70565b6102f0565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080850151859073ffffffffffffffffffffffffffffffffffffffff16610199576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6101a53447611bd5565b9050878061010001516101e4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561023e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361027b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6102908b5f01518c60c001518c8c336104be565b90508a60c001518111156102bc576102bc8b60800151338d60c00151846102b79190611bd5565b610600565b6102c68b89610635565b5047915050818111156102e2576102e25f846102b78585611bd5565b50505f909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161036b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080830151839073ffffffffffffffffffffffffffffffffffffffff166103c2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836103e58160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561041c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610459576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610100015115610497576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104a986608001518760c00151610b67565b6104b38686610635565b50505f909155505050565b5f828082036104f9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610507600185611bd5565b81811061051657610516611c0d565b90506020028101906105289190611c3a565b610539906080810190606001611c76565b90505f61054582610c1b565b905073ffffffffffffffffffffffffffffffffffffffff821661056f5761056c3482611bd5565b90505b5f61057a8888610c65565b90506105868888610d6f565b6105938a89898985610ddb565b5f8261059e85610c1b565b6105a89190611bd5565b9050898110156105f2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661062a576106258282611023565b505050565b610625838383611090565b61012082015115155f61064c610140840184611c96565b905011151514610688576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff81167311f111f111f111f111f111f111f111f111f111f11461070e57813573ffffffffffffffffffffffffffffffffffffffff82161461070e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61071f6040840160208501611c76565b73ffffffffffffffffffffffffffffffffffffffff160361076c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81356107a4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001355f036107e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015160c0840151610817827f0000000000000000000000000000000000000000000000000000000000000000836110fe565b6040805160018082528183019092525f91816020015b610835611856565b81526020019060019003908161082d57905050905060405180604001604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815250815f8151811061088757610887611c0d565b60209081029190910101526040805160018082528183019092525f91816020015b6108ea6040518061010001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f815260200160608152602001606081525090565b8152602001906001900390816108a857505060408051610100808201835260c0808b0135835260e0808c013560208501528c01519383019390935289013560608201526101208901356080820152883560a08201529192508101610952610140890189611c96565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250602001610999610160890189611c96565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093909452505083518492506109df576109df611c0d565b60200260200101819052507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637515fd56604051806101000160405280896020016020810190610a459190611c76565b73ffffffffffffffffffffffffffffffffffffffff16815260200189604001358152602001468152602001896060016020810190610a839190611cfe565b63ffffffff168152602001610a9e60a08b0160808c01611cfe565b63ffffffff168152602001610ab960c08b0160a08c01611c76565b73ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152506040518263ffffffff1660e01b8152600401610afa9190611eab565b5f604051808303815f87803b158015610b11575f5ffd5b505af1158015610b23573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f187604051610b569190611f8d565b60405180910390a150505050505050565b805f03610ba0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bf95780341015610bf5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610bf573ffffffffffffffffffffffffffffffffffffffff831633308461112a565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c5d57610c5873ffffffffffffffffffffffffffffffffffffffff831630611182565b610c5f565b475b92915050565b6060815f8167ffffffffffffffff811115610c8257610c82611874565b604051908082528060200260200182016040528015610cab578160200160208202803683370190505b5090505f5f5b83811015610d6457868682818110610ccb57610ccb611c0d565b9050602002810190610cdd9190611c3a565b610cee906080810190606001611c76565b9150610cf982610c1b565b838281518110610d0b57610d0b611c0d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d5c5734838281518110610d4457610d44611c0d565b60200260200101818151610d589190611bd5565b9052505b600101610cb1565b509095945050505050565b5f5b818110156106255736838383818110610d8c57610d8c611c0d565b9050602002810190610d9e9190611c3a565b9050610db060e0820160c083016120a0565b15610dd257610dd2610dc86060830160408401611c76565b8260800135610b67565b50600101610d71565b83838383825f80805b8381101561100757368c8c83818110610dff57610dff611c0d565b9050602002810190610e119190611c3a565b9050610e206020820182611c76565b9350610e326040820160208301611c76565b9250610ed584610e4560a0840184611c96565b610e53916004915f916120b9565b610e5c916120e0565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610fbd5750610f09610eef6060830160408401611c76565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610f4257508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015610fbd575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15610ff4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ffe8e826111b5565b50600101610de4565b50505050611018848484845f611428565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611070576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bf573ffffffffffffffffffffffffffffffffffffffff83168261163f565b73ffffffffffffffffffffffffffffffffffffffff82166110dd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61062573ffffffffffffffffffffffffffffffffffffffff84168383611658565b6106258383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116a1565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661117557637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6111cd6111c56020830183611c76565b6017903b1190565b611203576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611242576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611256610eef6060850160408601611c76565b611260575f611266565b82608001355b90505f61128161127c6080860160608701611c76565b610c1b565b9050815f036112b7576112b761129d6060860160408701611c76565b6112ad6040870160208801611c76565b86608001356110fe565b5f806112c66020870187611c76565b73ffffffffffffffffffffffffffffffffffffffff16846112ea60a0890189611c96565b6040516112f8929190612146565b5f6040518083038185875af1925050503d805f8114611332576040519150601f19603f3d011682016040523d82523d5f602084013e611337565b606091505b50915091508161134a5761134a816117ce565b5f61135e61127c6080890160608a01611c76565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861138f60208a018a611c76565b61139f60608b0160408c01611c76565b6113af60808c0160608d01611c76565b8b608001358987116113c157866113cb565b6113cb8a88611bd5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611437600182611bd5565b81811061144657611446611c0d565b90506020028101906114589190611c3a565b611469906080810190606001611c76565b90505f5f5f5f5f5f5f5b8881101561162f5761148660018a611bd5565b81108015611495575088600114155b15611570578d8d828181106114ac576114ac611c0d565b90506020028101906114be9190611c3a565b6114cf906080810190606001611c76565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611570578a818151811061151657611516611c0d565b602002602001015161152787610c1b565b6115319190611bd5565b965073ffffffffffffffffffffffffffffffffffffffff861615611555575f611557565b895b93508387111561157057611570868d6102b7878b611bd5565b8d8d8281811061158257611582611c0d565b90506020028101906115949190611c3a565b6115a5906060810190604001611c76565b94506115b085610c1b565b925073ffffffffffffffffffffffffffffffffffffffff8516156115d4575f6115d6565b895b9150818311801561161357508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561162757611627858d6102b78587611bd5565b600101611473565b5050505050505050505050505050565b5f385f3884865af1610bf55763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611698576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8416156117c85773ffffffffffffffffffffffffffffffffffffffff831661170a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561177d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117a19190612155565b10156117c8576117c873ffffffffffffffffffffffffffffffffffffffff851684836117d8565b50505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611698575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661169857633e3f8f735f526004601cfd5b60405180604001604052806002906020820280368337509192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156118c5576118c5611874565b60405290565b5f82601f8301126118da575f5ffd5b813567ffffffffffffffff8111156118f4576118f4611874565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561194157611941611874565b604052818152838201602001851015611958575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611997575f5ffd5b919050565b80358015158114611997575f5ffd5b5f61014082840312156119bc575f5ffd5b6119c46118a1565b823581529050602082013567ffffffffffffffff8111156119e3575f5ffd5b6119ef848285016118cb565b602083015250604082013567ffffffffffffffff811115611a0e575f5ffd5b611a1a848285016118cb565b604083015250611a2c60608301611974565b6060820152611a3d60808301611974565b6080820152611a4e60a08301611974565b60a082015260c0828101359082015260e08083013590820152611a74610100830161199c565b610100820152611a87610120830161199c565b61012082015292915050565b5f6101808284031215611aa4575f5ffd5b50919050565b5f5f5f5f60608587031215611abd575f5ffd5b843567ffffffffffffffff811115611ad3575f5ffd5b611adf878288016119ab565b945050602085013567ffffffffffffffff811115611afb575f5ffd5b8501601f81018713611b0b575f5ffd5b803567ffffffffffffffff811115611b21575f5ffd5b8760208260051b8401011115611b35575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611b58575f5ffd5b611b6487828801611a93565b91505092959194509250565b5f5f60408385031215611b81575f5ffd5b823567ffffffffffffffff811115611b97575f5ffd5b611ba3858286016119ab565b925050602083013567ffffffffffffffff811115611bbf575f5ffd5b611bcb85828601611a93565b9150509250929050565b81810381811115610c5f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c6c575f5ffd5b9190910192915050565b5f60208284031215611c86575f5ffd5b611c8f82611974565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611cc9575f5ffd5b83018035915067ffffffffffffffff821115611ce3575f5ffd5b602001915036819003821315611cf7575f5ffd5b9250929050565b5f60208284031215611d0e575f5ffd5b813563ffffffff81168114611c8f575f5ffd5b5f8151808452602084019350602083015f5b82811015611d78578151865f5b6002811015611d5f578251825260209283019290910190600101611d40565b5050506040959095019460209190910190600101611d33565b5093949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f82825180855260208501945060208160051b830101602085015f5b83811015611e9f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030188528151805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161010060c0860152611e6c610100860182611d82565b905060e0820151915084810360e0860152611e878183611d82565b60209a8b019a90955093909301925050600101611dea565b50909695505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff825116602082015260208201516040820152604082015160608201525f6060830151611ef8608084018263ffffffff169052565b50608083015163ffffffff811660a08401525060a083015173ffffffffffffffffffffffffffffffffffffffff811660c08401525060c083015161010060e0840152611f48610120840182611d21565b905060e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301610100850152611f848282611dce565b95945050505050565b60208152815160208201525f60208301516101406040840152611fb4610160840182611d82565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611fef8282611d82565b9150506060840151612019608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161208861012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156120b0575f5ffd5b611c8f8261199c565b5f5f858511156120c7575f5ffd5b838611156120d3575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561213f577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612165575f5ffd5b505191905056fea264697066735822122023fd260324778dab9ceedbba24004cf51f5f6d7113c9d0e8297b2d160eceaad164736f6c634300081d0033";
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
