import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetPacked, AcrossFacetPackedInterface } from "../AcrossFacetPacked";
declare type AcrossFacetPackedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetPacked__factory extends ContractFactory {
    constructor(...args: AcrossFacetPackedConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetPacked>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetPacked;
    connect(signer: Signer): AcrossFacetPacked__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b506040516200278838038062002788833981016040819052620000349162000079565b600080546001600160a01b0319166001600160a01b039283161790559182166080521660a052620000cd565b6001600160a01b03811681146200007657600080fd5b50565b6000806000606084860312156200008f57600080fd5b83516200009c8162000060565b6020850151909350620000af8162000060565b6040850151909250620000c28162000060565b809150509250925092565b60805160a0516126726200011660003960008181610afc0152610ce80152600081816105f2015281816108d601528181610a3701528181610ab90152610cb701526126726000f3fe6080604052600436106100e85760003560e01c80637200b8291161008a578063b4f3937811610059578063b4f3937814610245578063cf73f7111461028e578063e30c3978146102ae578063f2fde38b146102db57600080fd5b80637200b829146101915780638da5cb5b146101a6578063acc53eb8146101f8578063ae6c70601461022557600080fd5b80634c128e60116100c65780634c128e60146101435780634c478642146101565780635a39b10a146101765780635eedcbd61461017e57600080fd5b80631cf9fd2f146100ed5780632340ab8f1461012457806323452b9c1461012e575b600080fd5b3480156100f957600080fd5b5061010d610108366004611b84565b6102fb565b60405161011b929190611c7a565b60405180910390f35b61012c61056e565b005b34801561013a57600080fd5b5061012c6107ad565b61012c610151366004611e15565b610877565b34801561016257600080fd5b5061012c610171366004611ecd565b6109af565b61012c610a93565b61012c61018c366004611f42565b610c7a565b34801561019d57600080fd5b5061012c610db6565b3480156101b257600080fd5b506000546101d39073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161011b565b34801561020457600080fd5b50610218610213366004611fd2565b610e9c565b60405161011b919061202c565b34801561023157600080fd5b5061010d610240366004611b84565b611032565b34801561025157600080fd5b506102186040518060400160405280600881526020017fd00dfeeddeadbeef00000000000000000000000000000000000000000000000081525081565b34801561029a57600080fd5b506102186102a9366004612046565b611220565b3480156102ba57600080fd5b506001546101d39073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102e757600080fd5b5061012c6102f63660046120df565b61132c565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a0850184905260c0850184905260e0850184905261010085018490526101208501849052855190810186528381529081018390529384018190528301529060908310156103fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e2031343429000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600061040b601c85612129565b905061041b600c60048688612142565b6104249161216c565b7fffffffffffffffff0000000000000000000000000000000000000000000000001683526104566020600c8688612142565b61045f916121b4565b60601c60a0840152610475603460208688612142565b61047e916121b4565b60601c6080840152610494604460348688612142565b61049d916121fa565b60801c60c08401526104b3604860448688612142565b6104bc91612240565b60e090811c908401526104d3605060488688612142565b6104dc9161216c565b60c01d60070b82526104f2605460508688612142565b6104fb91612240565b60e01c6020830152610511607460548688612142565b61051a91612286565b606083015261052c8160748688612142565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506040830152505b9250929050565b600061057e603460203684612142565b610587916121b4565b60601c9050600061059c604460343684612142565b6105a5916121fa565b60801c90506105cc73ffffffffffffffffffffffffffffffffffffffff831633308461148a565b60006105d9601c36612129565b905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016631186ec336106266020600c366000612142565b61062f916121b4565b60601c61064160346020366000612142565b61064a916121b4565b60601c8561065d60486044366000612142565b61066691612240565b60e01c61067860506048366000612142565b6106819161216c565b60c01c61069360546050366000612142565b61069c91612240565b60e01c6106ad896074366000612142565b6106bc60746054366000612142565b6106c591612286565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08c901b1681526107069998979695949392919060040161230b565b600060405180830381600087803b15801561072057600080fd5b505af1158015610734573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c133925061076b9150600c90506004366000612142565b6107749161216c565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107fe576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661084d576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b61089973ffffffffffffffffffffffffffffffffffffffff8a1633308b61148a565b6040517f1186ec3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631186ec339061091b908a908d908d908c908c908c908c908c908c9060040161230b565b600060405180830381600087803b15801561093557600080fd5b505af1158015610949573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008d1681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250602001905060405180910390a150505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a00576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b81811015610a8e57610a7c838383818110610a2057610a20612388565b9050602002016020810190610a3591906120df565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611550565b80610a86816123b7565b915050610a03565b505050565b6000610aa0601c36612129565b905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016631186ec3334610aee6020600c366000612142565b610af7916121b4565b60601c7f000000000000000000000000000000000000000000000000000000000000000034610b2b60246020366000612142565b610b3491612240565b60e01c610b46602c6024366000612142565b610b4f9161216c565b60c01c610b616030602c366000612142565b610b6a91612240565b60e01c610b7b8a6050366000612142565b610b8a60506030366000612142565b610b9391612286565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b168152610bd49998979695949392919060040161230b565b6000604051808303818588803b158015610bed57600080fd5b505af1158015610c01573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350610c3a9250600c915060049050366000612142565b610c439161216c565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a150565b6040517f1186ec3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631186ec33903490610d1e908b907f00000000000000000000000000000000000000000000000000000000000000009084908d908d908d908d908d908d906004016123ef565b6000604051808303818588803b158015610d3757600080fd5b505af1158015610d4b573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008c1681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13393506020019150610da49050565b60405180910390a15050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610e08576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff871115610f32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016103f5565b6fffffffffffffffffffffffffffffffff881115610fd2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f6d696e416d6f756e742076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e743132380000000000000000000000000000000060648201526084016103f5565b632340ab8f60e01b8b8b60601b8b60601b8b60801b8b60e01b8b60c01b8b60e01b8960001b8c8c6040516020016110139b9a9998979695949392919061244b565b60405160208183030381529060405290509a9950505050505050505050565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a0850184905260c0850184905260e08501849052610100850184905261012085018490528551908101865283815290810183905293840181905283015290606c831015611130576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e2031303829000000000000000000000000000000000000000000000060648201526084016103f5565b600061113d601c85612129565b905061114d600c60048688612142565b6111569161216c565b7fffffffffffffffff0000000000000000000000000000000000000000000000001683526111886020600c8688612142565b611191916121b4565b60601c60a08401526111a7602460208688612142565b6111b091612240565b60e090811c908401526111c7602c60248688612142565b6111d09161216c565b60c01d60070b82526111e66030602c8688612142565b6111ef91612240565b60e01c6020830152611205605060308688612142565b61120e91612286565b606083015261052c8160508688612142565b606063ffffffff67ffffffffffffffff881611156112c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016103f5565b60405161130f907f5a39b10a00000000000000000000000000000000000000000000000000000000908b9060608c901b9060e08c811b9160c08d901b918c901b908b908b908b90602001612531565b604051602081830303815290604052905098975050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461137d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166113ca576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611419576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611549576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c454400000000000000000000000060448201526064016103f5565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff831661157057505050565b73ffffffffffffffffffffffffffffffffffffffff82166115bd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611632573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165691906125e5565b1015610a8e576116688383600061168f565b610a8e83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b80158061172f57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611709573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172d91906125e5565b155b6117bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016103f5565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610a8e92869291600091611886918516908490611933565b90508051600014806118a75750808060200190518101906118a791906125fe565b610a8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016103f5565b6060611942848460008561194a565b949350505050565b6060824710156119dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016103f5565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611a059190612620565b60006040518083038185875af1925050503d8060008114611a42576040519150601f19603f3d011682016040523d82523d6000602084013e611a47565b606091505b5091509150611a5887838387611a63565b979650505050505050565b60608315611af9578251600003611af25773ffffffffffffffffffffffffffffffffffffffff85163b611af2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103f5565b5081611942565b6119428383815115611b0e5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f5919061202c565b60008083601f840112611b5457600080fd5b50813567ffffffffffffffff811115611b6c57600080fd5b60208301915083602082850101111561056757600080fd5b60008060208385031215611b9757600080fd5b823567ffffffffffffffff811115611bae57600080fd5b611bba85828601611b42565b90969095509350505050565b60005b83811015611be1578181015183820152602001611bc9565b50506000910152565b60008151808452611c02816020860160208601611bc6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b805160070b825263ffffffff60208201511660208301526000604082015160806040850152611c666080850182611bea565b606093840151949093019390935250919050565b604081528251604082015260006020840151610140806060850152611ca3610180850183611bea565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0858403016080860152611cde8382611bea565b9250506060860151611d0860a086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060a086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060c0860151610100818187015260e088015191506101208281880152818901519250611d7c8488018415159052565b8801518015156101608801529250611d92915050565b508281036020840152611da58185611c34565b95945050505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611dd257600080fd5b919050565b803567ffffffffffffffff81168114611dd257600080fd5b8035600781900b8114611dd257600080fd5b803563ffffffff81168114611dd257600080fd5b6000806000806000806000806000806101208b8d031215611e3557600080fd5b8a359950611e4560208c01611dae565b985060408b01359750611e5a60608c01611dae565b9650611e6860808c01611dd7565b9550611e7660a08c01611def565b9450611e8460c08c01611e01565b935060e08b013567ffffffffffffffff811115611ea057600080fd5b611eac8d828e01611b42565b915080945050809250506101008b013590509295989b9194979a5092959850565b60008060208385031215611ee057600080fd5b823567ffffffffffffffff80821115611ef857600080fd5b818501915085601f830112611f0c57600080fd5b813581811115611f1b57600080fd5b8660208260051b8501011115611f3057600080fd5b60209290920196919550909350505050565b60008060008060008060008060e0898b031215611f5e57600080fd5b88359750611f6e60208a01611dae565b965060408901359550611f8360608a01611def565b9450611f9160808a01611e01565b935060a089013567ffffffffffffffff811115611fad57600080fd5b611fb98b828c01611b42565b999c989b50969995989497949560c00135949350505050565b6000806000806000806000806000806101208b8d031215611ff257600080fd5b8a35995061200260208c01611dae565b985061201060408c01611dae565b975060608b0135965060808b01359550611e7660a08c01611def565b60208152600061203f6020830184611bea565b9392505050565b60008060008060008060008060e0898b03121561206257600080fd5b8835975061207260208a01611dae565b965061208060408a01611dd7565b955061208e60608a01611def565b945061209c60808a01611e01565b935060a0890135925060c089013567ffffffffffffffff8111156120bf57600080fd5b6120cb8b828c01611b42565b999c989b5096995094979396929594505050565b6000602082840312156120f157600080fd5b61203f82611dae565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561213c5761213c6120fa565b92915050565b6000808585111561215257600080fd5b8386111561215f57600080fd5b5050820193919092039150565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156121ac5780818660080360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156121ac5760149490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156121ac5760109490940360031b84901b1690921692915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156121ac5760049490940360031b84901b1690921692915050565b8035602083101561213c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c1660208501525089604084015267ffffffffffffffff891660608401528760070b608084015263ffffffff871660a08401528060c084015261237181840186886122c2565b9150508260e08301529a9950505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036123e8576123e86120fa565b5060010190565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c166020850152508960408401528860608401528760070b608084015263ffffffff871660a08401528060c084015261237181840186886122c2565b7fffffffff000000000000000000000000000000000000000000000000000000008c811682527fffffffffffffffff0000000000000000000000000000000000000000000000008c811660048401527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008c8116600c8501528b1660208401527fffffffffffffffffffffffffffffffff000000000000000000000000000000008a166034840152888216604484015287166048830152851660508201526054810184905260008284607484013750600091016074019081529a9950505050505050505050565b7fffffffff000000000000000000000000000000000000000000000000000000008a811682527fffffffffffffffff0000000000000000000000000000000000000000000000008a811660048401527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008a16600c8401528882166020840152871660248301528516602c82015260308101849052600082846050840137506000910160500190815298975050505050505050565b6000602082840312156125f757600080fd5b5051919050565b60006020828403121561261057600080fd5b8151801515811461203f57600080fd5b60008251612632818460208701611bc6565b919091019291505056fea264697066735822122061dd8f3b5d3694c607e3a0ddfec032443f21c8e0ed5dcc2913da1cc58b943c4264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ACROSS_REFERRER_DELIMITER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossERC20Packed";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossNativePacked";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossERC20Packed";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
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
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossNativePacked";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForBridge";
        readonly inputs: readonly [{
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossERC20Min";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossERC20Packed";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossNativeMin";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossNativePacked";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "LiFiAcrossTransfer";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes8";
            readonly indexed: false;
            readonly internalType: "bytes8";
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
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetPacked;
}
export {};
