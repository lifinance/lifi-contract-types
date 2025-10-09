import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { EverclearFacet, EverclearFacetInterface } from "../EverclearFacet";
type EverclearFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EverclearFacet__factory extends ContractFactory {
    constructor(...args: EverclearFacetConstructorParams);
    deploy(_feeAdapter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<EverclearFacet>;
    getDeployTransaction(_feeAdapter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): EverclearFacet;
    connect(signer: Signer): EverclearFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161257e38038061257e83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516124bf6100bf5f395f81816070015281816106b7015281816107b701526109e601526124bf5ff3fe608060405260043610610033575f3560e01c8063089abd2c146100375780635c43f7e81461004c578063661d9c201461005f575b5f5ffd5b61004a610045366004611b82565b6100bb565b005b61004a61005a366004611be7565b61033b565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611cad565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102bb816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030489608001518a60c001516105be565b61030e8989610672565b50479250505081811115610330576103305f8461032b8585611cad565b610bbf565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c63447611cad565b905086806101000151610405576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610443576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104668160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610517576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961053a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610571576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105858b5f01518c60c001518c8c33610bf4565b60c08c01526105948b89610672565b504792505050818111156105b1576105b15f8461032b8585611cad565b50505f9091555050505050565b805f036105f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610650578034101561064c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61064c73ffffffffffffffffffffffffffffffffffffffff8316333084610d36565b60408101356106ad576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106e082608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610d8e565b6040805160018082528183019092525f91602080830190803683370190505090508260e00151815f8151811061071857610718611ce5565b602002602001019063ffffffff16908163ffffffff16815250507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036109905781356107b5576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633bd1c754836020013583855f0135876080015187604001358860c001358a60c001516108199190611cad565b61082960808b0160608c01611d25565b61083960a08c0160808d01611d5a565b61084660a08d018d611d75565b60405180606001604052808f60c0013581526020018f60e0013581526020018f8061010001906108769190611d75565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e08e901b1681526108ed9a99989796959493929190600401611ee0565b5f6040518083038185885af1158015610908573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261094e9190810190612088565b505060e08301518351604051843581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a3610b83565b60a083015173ffffffffffffffffffffffffffffffffffffffff168235146109e4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b4c204778360200135838660a00151876080015187604001355f1c8860c001358a60c00151610a4b9190611cad565b610a5b60808b0160608c01611d25565b610a6b60a08c0160808d01611d5a565b610a7860a08d018d611d75565b60405180606001604052808f60c0013581526020018f60e0013581526020018f806101000190610aa89190611d75565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e08e901b168152610b1f9a999897969594939291906004016121bb565b5f6040518083038185885af1158015610b3a573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b809190810190612088565b50505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610bb29190612255565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610be957610be48282610dba565b505050565b610be4838383610e27565b5f82808203610c2f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610c3d600185611cad565b818110610c4c57610c4c611ce5565b9050602002810190610c5e9190612368565b610c6f9060808101906060016123a4565b90505f610c7b82610e95565b905073ffffffffffffffffffffffffffffffffffffffff8216610ca557610ca23482611cad565b90505b5f610cb08888610edf565b9050610cbc8888610fe9565b610cc98a89898985611055565b5f82610cd485610e95565b610cde9190611cad565b905089811015610d28576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610d8157637939f4245f526004601cfd5b5f60605260405250505050565b610be48383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611217565b73ffffffffffffffffffffffffffffffffffffffff8216610e07576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61064c73ffffffffffffffffffffffffffffffffffffffff831682611344565b73ffffffffffffffffffffffffffffffffffffffff8216610e74576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610be473ffffffffffffffffffffffffffffffffffffffff8416838361135d565b5f73ffffffffffffffffffffffffffffffffffffffff821615610ed757610ed273ffffffffffffffffffffffffffffffffffffffff8316306113a6565b610ed9565b475b92915050565b6060815f8167ffffffffffffffff811115610efc57610efc6118eb565b604051908082528060200260200182016040528015610f25578160200160208202803683370190505b5090505f5f5b83811015610fde57868682818110610f4557610f45611ce5565b9050602002810190610f579190612368565b610f689060808101906060016123a4565b9150610f7382610e95565b838281518110610f8557610f85611ce5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610fd65734838281518110610fbe57610fbe611ce5565b60200260200101818151610fd29190611cad565b9052505b600101610f2b565b509095945050505050565b5f5b81811015610be4573683838381811061100657611006611ce5565b90506020028101906110189190612368565b905061102a60e0820160c083016123bd565b1561104c5761104c61104260608301604084016123a4565b82608001356105be565b50600101610feb565b83838383825f5b818110156111fd57368a8a8381811061107757611077611ce5565b90506020028101906110899190612368565b90506110b861109e60608301604084016123a4565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061111a575061111a6110d160408301602084016123a4565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561113157506111316110d160208301836123a4565b80156111b457506111b461114860a0830183611d75565b611156916004915f916123d6565b61115f916123fd565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6111ea576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111f48c826113d9565b5060010161105c565b505061120c848484845f61164c565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561133e5773ffffffffffffffffffffffffffffffffffffffff8316611280576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156112f3573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113179190612463565b101561133e5761133e73ffffffffffffffffffffffffffffffffffffffff85168483611863565b50505050565b5f385f3884865af161064c5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661139d576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6113f16113e960208301836123a4565b6017903b1190565b611427576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611466576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61147a61109e60608501604086016123a4565b611484575f61148a565b82608001355b90505f6114a56114a060808601606087016123a4565b610e95565b9050815f036114db576114db6114c160608601604087016123a4565b6114d160408701602088016123a4565b8660800135610d8e565b5f806114ea60208701876123a4565b73ffffffffffffffffffffffffffffffffffffffff168461150e60a0890189611d75565b60405161151c92919061247a565b5f6040518083038185875af1925050503d805f8114611556576040519150601f19603f3d011682016040523d82523d5f602084013e61155b565b606091505b50915091508161156e5761156e816118e1565b5f6115826114a06080890160608a016123a4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886115b360208a018a6123a4565b6115c360608b0160408c016123a4565b6115d360808c0160608d016123a4565b8b608001358987116115e557866115ef565b6115ef8a88611cad565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261165b600182611cad565b81811061166a5761166a611ce5565b905060200281019061167c9190612368565b61168d9060808101906060016123a4565b90505f5f5f5f5f5f5f5b88811015611853576116aa60018a611cad565b811080156116b9575088600114155b15611794578d8d828181106116d0576116d0611ce5565b90506020028101906116e29190612368565b6116f39060808101906060016123a4565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611794578a818151811061173a5761173a611ce5565b602002602001015161174b87610e95565b6117559190611cad565b965073ffffffffffffffffffffffffffffffffffffffff861615611779575f61177b565b895b93508387111561179457611794868d61032b878b611cad565b8d8d828181106117a6576117a6611ce5565b90506020028101906117b89190612368565b6117c99060608101906040016123a4565b94506117d485610e95565b925073ffffffffffffffffffffffffffffffffffffffff8516156117f8575f6117fa565b895b9150818311801561183757508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561184b5761184b858d61032b8587611cad565b600101611697565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661139d575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661139d57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561193c5761193c6118eb565b60405290565b604051610180810167ffffffffffffffff8111828210171561193c5761193c6118eb565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156119ad576119ad6118eb565b604052919050565b5f67ffffffffffffffff8211156119ce576119ce6118eb565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611a09575f5ffd5b8135611a1c611a17826119b5565b611966565b818152846020838601011115611a30575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611a6f575f5ffd5b919050565b80358015158114611a6f575f5ffd5b5f6101408284031215611a94575f5ffd5b611a9c611918565b823581529050602082013567ffffffffffffffff811115611abb575f5ffd5b611ac7848285016119fa565b602083015250604082013567ffffffffffffffff811115611ae6575f5ffd5b611af2848285016119fa565b604083015250611b0460608301611a4c565b6060820152611b1560808301611a4c565b6080820152611b2660a08301611a4c565b60a082015260c0828101359082015260e08083013590820152611b4c6101008301611a74565b610100820152611b5f6101208301611a74565b61012082015292915050565b5f6101208284031215611b7c575f5ffd5b50919050565b5f5f60408385031215611b93575f5ffd5b823567ffffffffffffffff811115611ba9575f5ffd5b611bb585828601611a83565b925050602083013567ffffffffffffffff811115611bd1575f5ffd5b611bdd85828601611b6b565b9150509250929050565b5f5f5f5f60608587031215611bfa575f5ffd5b843567ffffffffffffffff811115611c10575f5ffd5b611c1c87828801611a83565b945050602085013567ffffffffffffffff811115611c38575f5ffd5b8501601f81018713611c48575f5ffd5b803567ffffffffffffffff811115611c5e575f5ffd5b8760208260051b8401011115611c72575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c95575f5ffd5b611ca187828801611b6b565b91505092959194509250565b81810381811115610ed9577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b62ffffff81168114611d22575f5ffd5b50565b5f60208284031215611d35575f5ffd5b8135611d4081611d12565b9392505050565b65ffffffffffff81168114611d22575f5ffd5b5f60208284031215611d6a575f5ffd5b8135611d4081611d47565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611da8575f5ffd5b83018035915067ffffffffffffffff821115611dc2575f5ffd5b602001915036819003821315611dd6575f5ffd5b9250929050565b5f8151808452602084019350602083015f5b82811015611e1357815163ffffffff16865260209586019590910190600101611def565b5093949350505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b80518252602081015160208301525f604082015160606040850152611ed86060850182611e64565b949350505050565b61012081525f611ef461012083018d611ddd565b8b602084015273ffffffffffffffffffffffffffffffffffffffff8b16604084015289606084015288608084015262ffffff881660a084015265ffffffffffff871660c084015282810360e0840152611f4e818688611e1d565b9050828103610100840152611f638185611eb0565b9d9c50505050505050505050505050565b8051611a6f81611d12565b805163ffffffff81168114611a6f575f5ffd5b805167ffffffffffffffff81168114611a6f575f5ffd5b8051611a6f81611d47565b5f82601f830112611fc3575f5ffd5b815167ffffffffffffffff811115611fdd57611fdd6118eb565b8060051b611fed60208201611966565b91825260208185018101929081019086841115612008575f5ffd5b6020860192505b838310156120315761202083611f7f565b82526020928301929091019061200f565b9695505050505050565b5f82601f83011261204a575f5ffd5b8151612058611a17826119b5565b81815284602083860101111561206c575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f5f60408385031215612099575f5ffd5b8251602084015190925067ffffffffffffffff8111156120b7575f5ffd5b830161018081860312156120c9575f5ffd5b6120d1611942565b815181526020808301519082015260408083015190820152606080830151908201526120ff60808301611f74565b608082015261211060a08301611f7f565b60a082015261212160c08301611f92565b60c082015261213260e08301611fa9565b60e08201526121446101008301611fa9565b610100820152610120828101519082015261014082015167ffffffffffffffff81111561216f575f5ffd5b61217b87828501611fb4565b6101408301525061016082015167ffffffffffffffff81111561219c575f5ffd5b6121a88782850161203b565b6101608301525080925050509250929050565b61012081525f6121cf61012083018d611ddd565b73ffffffffffffffffffffffffffffffffffffffff8c16602084015273ffffffffffffffffffffffffffffffffffffffff8b16604084015273ffffffffffffffffffffffffffffffffffffffff8a16606084015288608084015262ffffff881660a084015265ffffffffffff871660c084015282810360e0840152611f4e818688611e1d565b60208152815160208201525f6020830151610140604084015261227c610160840182611e64565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526122b78282611e64565b91505060608401516122e1608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161235061012085018215159052565b50610120840151801515610140850152509392505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261239a575f5ffd5b9190910192915050565b5f602082840312156123b4575f5ffd5b611d4082611a4c565b5f602082840312156123cd575f5ffd5b611d4082611a74565b5f5f858511156123e4575f5ffd5b838611156123f0575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561245c577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612473575f5ffd5b5051919050565b818382375f910190815291905056fea264697066735822122086dcb123ce266653757641f04472014d8c93b6869509d5a15ee566d62fb384ee64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_feeAdapter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "FEE_ADAPTER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IEverclearFeeAdapter";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaEverclear";
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
            readonly name: "_everclearData";
            readonly type: "tuple";
            readonly internalType: "struct EverclearFacet.EverclearData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "maxFee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaEverclear";
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
            readonly name: "_everclearData";
            readonly type: "tuple";
            readonly internalType: "struct EverclearFacet.EverclearData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "maxFee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
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
        readonly name: "InvalidCallData";
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
        readonly name: "InvalidNonEVMReceiver";
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
    static createInterface(): EverclearFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EverclearFacet;
}
export {};
