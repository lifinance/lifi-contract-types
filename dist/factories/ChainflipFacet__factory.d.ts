import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ChainflipFacet, ChainflipFacetInterface } from "../ChainflipFacet";
type ChainflipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ChainflipFacet__factory extends ContractFactory {
    constructor(...args: ChainflipFacetConstructorParams);
    deploy(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ChainflipFacet>;
    getDeployTransaction(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ChainflipFacet;
    connect(signer: Signer): ChainflipFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161255b38038061255b83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b60805161248e6100cd5f395f8181605d0152818161075a01528181610831015281816108e901528181610a020152610a96015261248e5ff3fe608060405260043610610033575f3560e01c80630ad553b314610037578063786567f71461004c578063ee3314a1146100a8575b5f5ffd5b61004a610045366004611b52565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b6366004611bb7565b6102a1565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611c7d565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61026c87608001518860c0015161048a565b610276878761053e565b5047905081811115610296576102965f846102918585611c7d565b610b72565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161031c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61032c3447611c7d565b90508680610100015161036b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761038e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103c5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610402576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361043f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610453895f01518a60c001518a8a33610ba7565b60c08a0152610462898761053e565b504790508181111561047d5761047d5f846102918585611c7d565b50505f9091555050505050565b805f036104c3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661051c5780341015610518576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61051873ffffffffffffffffffffffffffffffffffffffff8316333084610ceb565b5f61054c8360e00151610d43565b90505f610571846080015173ffffffffffffffffffffffffffffffffffffffff161590565b905060607311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff1603610692576105ca8480611cb5565b90505f03610604576040517f6e70c56c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61060e8480611cb5565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050505060e08601518651919250907ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b6106778780611cb5565b604051610685929190611d64565b60405180910390a361074b565b5f8561012001516106a7578560a001516106b7565b6106b76060860160408701611d7f565b905073ffffffffffffffffffffffffffffffffffffffff8116610706576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606083901b1660208201526034016040516020818303038152906040529150505b816107835761078385608001517f00000000000000000000000000000000000000000000000000000000000000008760c00151610dc7565b846101200151156109985761079b6060850185611d9f565b90505f036107d5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84515f906107e66060870187611d9f565b8860a001516040516020016107fe9493929190611e63565b604051602081830303815290604052905082156108d25760c086015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906307933dd290868561086a60408b0160208c01612009565b8660808c013561087d60a08e018e611cb5565b6040518963ffffffff1660e01b815260040161089f9796959493929190612078565b5f604051808303818588803b1580156108b6575f5ffd5b505af11580156108c8573d5f5f3e3d5ffd5b5050505050610992565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663bbddc2fb858461092060408a0160208b01612009565b858a608001358c608001518d60c001518d8060a001906109409190611cb5565b6040518a63ffffffff1660e01b8152600401610964999897969594939291906120dd565b5f604051808303815f87803b15801561097b575f5ffd5b505af115801561098d573d5f5f3e3d5ffd5b505050505b50610b34565b5f6109a66060860186611d9f565b905011156109e0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8115610a7f5760c085015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063dd687345908584610a3b60408a0160208b01612009565b610a4860a08b018b611cb5565b6040518763ffffffff1660e01b8152600401610a68959493929190612168565b5f604051808303818588803b15801561097b575f5ffd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166304fc7da08483610acd6040890160208a01612009565b60808a015160c08b0151610ae460a08c018c611cb5565b6040518863ffffffff1660e01b8152600401610b0697969594939291906121b1565b5f604051808303815f87803b158015610b1d575f5ffd5b505af1158015610b2f573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610b639190612210565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b9c57610b978282610df3565b505050565b610b97838383610e60565b5f82808203610be2576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610bf0600185611c7d565b818110610bff57610bff612323565b9050602002810190610c119190612350565b610c22906080810190606001611d7f565b90505f610c2e82610ece565b905073ffffffffffffffffffffffffffffffffffffffff8216610c5857610c553482611c7d565b90505b5f610c638888610f18565b9050610c6f8888611022565b610c7c8a8989898561108e565b5f82610c8785610ece565b610c919190611c7d565b905089811015610cdb576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9450505050505b95945050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610d3657637939f4245f526004601cfd5b5f60605260405250505050565b5f60018203610d5457506001919050565b61a4b18203610d6557506004919050565b660416edef1601be8203610d7b57506005919050565b6512309ce540018203610d9057506003919050565b6040517f63b7b64100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b610b978383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61124e565b73ffffffffffffffffffffffffffffffffffffffff8216610e40576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61051873ffffffffffffffffffffffffffffffffffffffff83168261137b565b73ffffffffffffffffffffffffffffffffffffffff8216610ead576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b9773ffffffffffffffffffffffffffffffffffffffff84168383611394565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f1057610f0b73ffffffffffffffffffffffffffffffffffffffff8316306113dd565b610f12565b475b92915050565b6060815f8167ffffffffffffffff811115610f3557610f35611922565b604051908082528060200260200182016040528015610f5e578160200160208202803683370190505b5090505f5f5b8381101561101757868682818110610f7e57610f7e612323565b9050602002810190610f909190612350565b610fa1906080810190606001611d7f565b9150610fac82610ece565b838281518110610fbe57610fbe612323565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661100f5734838281518110610ff757610ff7612323565b6020026020010181815161100b9190611c7d565b9052505b600101610f64565b509095945050505050565b5f5b81811015610b97573683838381811061103f5761103f612323565b90506020028101906110519190612350565b905061106360e0820160c0830161238c565b156110855761108561107b6060830160408401611d7f565b826080013561048a565b50600101611024565b83838383825f5b8181101561123457368a8a838181106110b0576110b0612323565b90506020028101906110c29190612350565b90506110f16110d76060830160408401611d7f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611152575061115261110a6040830160208401611d7f565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f216020526040902054151590565b8015611169575061116961110a6020830183611d7f565b80156111eb57506111eb61118060a0830183611cb5565b61118e916004915f916123a5565b611197916123cc565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f226020526040902054151590565b611221576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61122b8c82611410565b50600101611095565b5050611243848484845f611683565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156113755773ffffffffffffffffffffffffffffffffffffffff83166112b7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561132a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061134e9190612432565b10156113755761137573ffffffffffffffffffffffffffffffffffffffff8516848361189a565b50505050565b5f385f3884865af16105185763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166113d4576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6114286114206020830183611d7f565b6017903b1190565b61145e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361149d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6114b16110d76060850160408601611d7f565b6114bb575f6114c1565b82608001355b90505f6114dc6114d76080860160608701611d7f565b610ece565b9050815f03611512576115126114f86060860160408701611d7f565b6115086040870160208801611d7f565b8660800135610dc7565b5f806115216020870187611d7f565b73ffffffffffffffffffffffffffffffffffffffff168461154560a0890189611cb5565b604051611553929190612449565b5f6040518083038185875af1925050503d805f811461158d576040519150601f19603f3d011682016040523d82523d5f602084013e611592565b606091505b5091509150816115a5576115a581611918565b5f6115b96114d76080890160608a01611d7f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886115ea60208a018a611d7f565b6115fa60608b0160408c01611d7f565b61160a60808c0160608d01611d7f565b8b6080013589871161161c5786611626565b6116268a88611c7d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611692600182611c7d565b8181106116a1576116a1612323565b90506020028101906116b39190612350565b6116c4906080810190606001611d7f565b90505f5f5f5f5f5f5f5b8881101561188a576116e160018a611c7d565b811080156116f0575088600114155b156117cb578d8d8281811061170757611707612323565b90506020028101906117199190612350565b61172a906080810190606001611d7f565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146117cb578a818151811061177157611771612323565b602002602001015161178287610ece565b61178c9190611c7d565b965073ffffffffffffffffffffffffffffffffffffffff8616156117b0575f6117b2565b895b9350838711156117cb576117cb868d610291878b611c7d565b8d8d828181106117dd576117dd612323565b90506020028101906117ef9190612350565b611800906060810190604001611d7f565b945061180b85610ece565b925073ffffffffffffffffffffffffffffffffffffffff85161561182f575f611831565b895b9150818311801561186e57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561188257611882858d6102918587611c7d565b6001016116ce565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166113d4575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166113d457633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561197357611973611922565b60405290565b5f82601f830112611988575f5ffd5b813567ffffffffffffffff8111156119a2576119a2611922565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156119ef576119ef611922565b604052818152838201602001851015611a06575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610dc2575f5ffd5b80358015158114610dc2575f5ffd5b5f6101408284031215611a65575f5ffd5b611a6d61194f565b823581529050602082013567ffffffffffffffff811115611a8c575f5ffd5b611a9884828501611979565b602083015250604082013567ffffffffffffffff811115611ab7575f5ffd5b611ac384828501611979565b604083015250611ad560608301611a22565b6060820152611ae660808301611a22565b6080820152611af760a08301611a22565b60a082015260c0828101359082015260e08083013590820152611b1d6101008301611a45565b610100820152611b306101208301611a45565b61012082015292915050565b5f60c08284031215611b4c575f5ffd5b50919050565b5f5f60408385031215611b63575f5ffd5b823567ffffffffffffffff811115611b79575f5ffd5b611b8585828601611a54565b925050602083013567ffffffffffffffff811115611ba1575f5ffd5b611bad85828601611b3c565b9150509250929050565b5f5f5f5f60608587031215611bca575f5ffd5b843567ffffffffffffffff811115611be0575f5ffd5b611bec87828801611a54565b945050602085013567ffffffffffffffff811115611c08575f5ffd5b8501601f81018713611c18575f5ffd5b803567ffffffffffffffff811115611c2e575f5ffd5b8760208260051b8401011115611c42575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c65575f5ffd5b611c7187828801611b3c565b91505092959194509250565b81810381811115610f12577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ce8575f5ffd5b83018035915067ffffffffffffffff821115611d02575f5ffd5b602001915036819003821315611d16575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b602081525f611d77602083018486611d1d565b949350505050565b5f60208284031215611d8f575f5ffd5b611d9882611a22565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611dd2575f5ffd5b83018035915067ffffffffffffffff821115611dec575f5ffd5b6020019150600581901b3603821315611d16575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e36575f5ffd5b830160208101925035905067ffffffffffffffff811115611e55575f5ffd5b803603821315611d16575f5ffd5b5f60608201868352606060208401528085825260808401905060808660051b8501019150865f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21893603015b88821015611fe2577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808786030184528235818112611eeb575f5ffd5b8a0173ffffffffffffffffffffffffffffffffffffffff611f0b82611a22565b16865273ffffffffffffffffffffffffffffffffffffffff611f2f60208301611a22565b16602087015273ffffffffffffffffffffffffffffffffffffffff611f5660408301611a22565b166040870152611f6860608201611a22565b73ffffffffffffffffffffffffffffffffffffffff16606087015260808181013590870152611f9a60a0820182611e03565b60e060a0890152611faf60e089018284611d1d565b915050611fbe60c08301611a45565b80151560c08901529150955050602093840193929092019160019190910190611eaf565b50505073ffffffffffffffffffffffffffffffffffffffff85166040850152509050610ce2565b5f60208284031215612019575f5ffd5b813563ffffffff81168114611d98575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b63ffffffff8816815260c060208201525f61209660c083018961202c565b63ffffffff8816604084015282810360608401526120b4818861202c565b905085608084015282810360a08401526120cf818587611d1d565b9a9950505050505050505050565b63ffffffff8a16815261010060208201525f6120fd61010083018b61202c565b63ffffffff8a166040840152828103606084015261211b818a61202c565b905087608084015273ffffffffffffffffffffffffffffffffffffffff871660a08401528560c084015282810360e0840152612158818587611d1d565b9c9b505050505050505050505050565b63ffffffff86168152608060208201525f612186608083018761202c565b63ffffffff8616604084015282810360608401526121a5818587611d1d565b98975050505050505050565b63ffffffff8816815260c060208201525f6121cf60c083018961202c565b63ffffffff8816604084015273ffffffffffffffffffffffffffffffffffffffff8716606084015285608084015282810360a08401526120cf818587611d1d565b60208152815160208201525f6020830151610140604084015261223761016084018261202c565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152612272828261202c565b915050606084015161229c608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161230b61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612382575f5ffd5b9190910192915050565b5f6020828403121561239c575f5ffd5b611d9882611a45565b5f5f858511156123b3575f5ffd5b838611156123bf575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561242b577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612442575f5ffd5b5051919050565b818382375f910190815291905056fea26469706673582212202eb5d85d51fe6c33b38ecd125e92e2ecb8775b9962128a14a71deaf8de92b61f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_chainflipVault";
            readonly type: "address";
            readonly internalType: "contract IChainflipVault";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "CHAINFLIP_VAULT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IChainflipVault";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaChainflip";
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
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "dstCallReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "dstCallSwapData";
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
                readonly name: "gasAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "cfParameters";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaChainflip";
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
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "dstCallReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "dstCallSwapData";
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
                readonly name: "gasAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "cfParameters";
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
        readonly name: "EmptyNonEvmAddress";
        readonly inputs: readonly [];
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
    }, {
        readonly type: "error";
        readonly name: "UnsupportedChainflipChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): ChainflipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainflipFacet;
}
export {};
